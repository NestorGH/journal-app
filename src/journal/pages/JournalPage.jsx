import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'


export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
    </JournalLayout>
  )
}
