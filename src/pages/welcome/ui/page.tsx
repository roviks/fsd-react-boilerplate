import { FC } from 'react'

import { Container } from '@/shared/ui/container'
import { MainLayout } from '@/pages/layouts/main'
import { Users } from '@/entities/users'

import { Counter } from './counter'
import styles from './styles.module.css'

export const WelcomePage: FC = () => {
  return (
    <MainLayout title="Greetings in Main Layout! =)">
      <Container>
        <Users className={styles.usersWrapper} />
        <Counter />
      </Container>
    </MainLayout>
  )
}
