<script setup lang="ts">
type Contribution = {
  date: string
  count: number
  level: number
}

type ContributionsResponse = {
  total: Record<string, number>
  contributions: Contribution[]
}

const username = 'ricckimislang'
const { data, error, status } = await useFetch<ContributionsResponse>(
  `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
  { key: `github-contributions-${username}`, server: false }
)

const contributionTotal = computed(() => data.value?.total?.lastYear ?? 0)
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const labeledWeekDays = new Set([1, 3, 5])
const formatDate = (date: string) => new Date(`${date}T00:00:00Z`).toLocaleDateString('en', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC'
})

const weeks = computed(() => {
  const contributions = data.value?.contributions
  if (!contributions?.length) return []

  const byDate = new Map(contributions.map((day) => [day.date, day]))
  const firstDay = new Date(`${contributions[0].date}T00:00:00Z`)
  firstDay.setUTCDate(firstDay.getUTCDate() - firstDay.getUTCDay())

  const lastDay = new Date(`${contributions[contributions.length - 1].date}T00:00:00Z`)
  lastDay.setUTCDate(lastDay.getUTCDate() + (6 - lastDay.getUTCDay()))

  const result: Contribution[][] = []
  const dayInMs = 24 * 60 * 60 * 1000

  for (let weekStart = firstDay.getTime(); weekStart <= lastDay.getTime(); weekStart += 7 * dayInMs) {
    result.push(Array.from({ length: 7 }, (_, dayIndex) => {
      const date = new Date(weekStart + dayIndex * dayInMs).toISOString().slice(0, 10)
      return byDate.get(date) ?? { date, count: 0, level: 0 }
    }))
  }

  return result
})

const monthLabels = computed(() => weeks.value.map((week) => {
  const firstOfMonth = week.find((day) => day.date.endsWith('-01'))
  return firstOfMonth
    ? new Date(`${firstOfMonth.date}T00:00:00Z`).toLocaleDateString('en', { month: 'short', timeZone: 'UTC' })
    : ''
}))
</script>

<template>
  <div class="contribution-calendar mt-2 mb-7">
    <p v-if="status === 'success'" class="m-0 mb-4 font-mono text-[0.78rem] text-[var(--muted)]">
      <span class="text-[var(--text)]">{{ contributionTotal.toLocaleString() }} contributions</span> in the last year
    </p>

    <div v-if="weeks.length" class="calendar-scroll" tabindex="0" aria-label="GitHub contributions in the last year; scroll horizontally to view the full calendar">
      <div class="calendar-content">
        <div class="month-labels" aria-hidden="true">
          <span v-for="(month, index) in monthLabels" :key="index">{{ month }}</span>
        </div>
        <div class="calendar-layout">
          <div class="weekday-labels" aria-hidden="true">
            <span v-for="(day, index) in weekDays" :key="day">{{ labeledWeekDays.has(index) ? day : '' }}</span>
          </div>
          <div class="contribution-grid" role="grid" aria-label="Daily contributions in the last year">
            <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="contribution-week" role="row">
              <span
                v-for="day in week"
                :key="day.date"
                class="contribution-day"
                :data-level="day.level"
                role="gridcell"
                :aria-label="`${day.count} contributions on ${formatDate(day.date)}`"
                :title="`${day.count} contributions on ${day.date}`"
              />
            </div>
          </div>
        </div>
        <div class="calendar-legend" aria-label="Contribution activity scale">
          <span>Less</span>
          <span v-for="level in 5" :key="level" class="contribution-day" :data-level="level - 1" aria-hidden="true" />
          <span>More</span>
        </div>
      </div>
    </div>

    <p v-else-if="status === 'pending' || status === 'idle'" class="m-0 mb-5 text-[0.78rem] text-[var(--muted)]">
      Loading contribution activity…
    </p>
    <p v-else-if="error || status === 'error'" class="m-0 mb-5 text-[0.78rem] text-[var(--muted)]">
      Contribution activity is temporarily unavailable. <a class="profile-link" href="https://github.com/ricckimislang" target="_blank" rel="noreferrer">View it on GitHub ↗</a>
    </p>
  </div>
</template>

<style scoped>
.contribution-calendar {
  --activity-0: var(--surface-strong);
  --activity-1: var(--line);
  --activity-2: var(--line-strong);
  --activity-3: var(--faint);
  --activity-4: var(--muted);
}

.calendar-scroll {
  max-width: 100%;
  overflow-x: auto;
  padding: 2px 2px 8px;
  scrollbar-color: var(--line-strong) transparent;
}

.calendar-content {
  width: max-content;
}

.month-labels,
.contribution-grid {
  display: grid;
  grid-auto-columns: 10px;
  grid-auto-flow: column;
  gap: 3px;
}

.month-labels {
  margin-bottom: 6px;
  color: var(--faint);
  font-family: 'DM Mono', ui-monospace, monospace;
  font-size: 0.62rem;
  line-height: 1.2;
}

.month-labels span {
  white-space: nowrap;
}

.calendar-layout {
  display: flex;
  gap: 8px;
}

.weekday-labels,
.contribution-week {
  display: grid;
  grid-template-rows: repeat(7, 10px);
  gap: 3px;
}

.weekday-labels {
  color: var(--faint);
  font-family: 'DM Mono', ui-monospace, monospace;
  font-size: 0.58rem;
  line-height: 10px;
}

.contribution-week {
  display: grid;
}

.contribution-day {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: var(--activity-0);
}

.contribution-day[data-level="1"] { background: var(--activity-1); }
.contribution-day[data-level="2"] { background: var(--activity-2); }
.contribution-day[data-level="3"] { background: var(--activity-3); }
.contribution-day[data-level="4"] { background: var(--activity-4); }

.calendar-legend {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
  color: var(--faint);
  font-family: 'DM Mono', ui-monospace, monospace;
  font-size: 0.62rem;
}

.calendar-legend .contribution-day {
  width: 9px;
  height: 9px;
}

.profile-link {
  text-decoration: underline;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 3px;
}

.profile-link:hover {
  color: var(--text);
}

@media (prefers-reduced-motion: no-preference) {
  .contribution-day { transition: filter 120ms ease; }
  .contribution-day:hover { filter: brightness(1.15); }
}
</style>
