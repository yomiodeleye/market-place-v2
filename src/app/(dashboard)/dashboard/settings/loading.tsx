import { Card } from '@/src/components/ui/card'
import { CardSkeleton } from '@/src/components/card-skeleton'
import { DashboardHeader } from '@/src/components/dashboard-header'
import { DashboardShell } from '@/src/components/shell'

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
