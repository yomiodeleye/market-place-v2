import { redirect } from 'next/navigation'

import { authOptions } from '@/src/lib/auth'
import { getCurrentUser } from '@/src/lib/session'
import { DashboardHeader } from '@/src/components/dashboard-header'
import { DashboardShell } from '@/src/components/shell'
import { UserNameForm } from '@/src/components/user-name-form'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name || '' }} />
      </div>
    </DashboardShell>
  )
}
