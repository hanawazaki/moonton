import Authenticated from '@/Layouts/Authenticated/index'
import Button from '@/Components/Button'
import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import FlashMessage from '@/Components/FlashMessage'

const Index = ({ auth, flashMessage }) => {
  return (
    <Authenticated auth={auth}>
      <Link href={route('admin.dashboard.movie.create')}>
        <Button type='button' className="w-40 mb-8">Insert new movie</Button>
      </Link>
      {
        flashMessage?.message && <FlashMessage message={flashMessage.message} />
      }
    </Authenticated>
  )
}

export default Index