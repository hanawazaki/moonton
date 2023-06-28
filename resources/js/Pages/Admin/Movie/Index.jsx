import Authenticated from '@/Layouts/Authenticated/index'
import Button from '@/Components/Button'
import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react'
import FlashMessage from '@/Components/FlashMessage'

const Index = ({ auth, flashMessage, movies }) => {
  const { delete: destroy, put } = useForm();

  return (
    <Authenticated auth={auth}>
      <Head title="List of Movie" />
      <Link href={route('admin.dashboard.movie.create')}>
        <Button type='button' className="w-40 mb-8">Insert new movie</Button>
      </Link>
      {
        flashMessage?.message && (<FlashMessage message={flashMessage.message} />)
      }

      <table className='table-fixed w-full text-center'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Rating</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((movie, index) => (
              <tr key={index}>
                <td>
                  <img src={`/storage/${movie.thumbnail}`} className='w-32 rounded-md' alt="movie-img" />
                </td>
                <td>
                  {movie.name}
                </td>
                <td>
                  {movie.category}
                </td>
                <td>
                  {movie.rating.toFixed(1)}
                </td>
                <td>
                  <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                    <Button type='button' variant='warning'>Ubah</Button>
                  </Link>
                </td>
                <td>
                  <div onClick={() => {
                    movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)) :
                      destroy(route("admin.dashboard.movie.destroy", movie.id))
                  }}>
                    <Button type='button' variant='danger'>{movie.deleted_at ? "Restore" : "Delete"}</Button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </Authenticated>
  )
}

export default Index