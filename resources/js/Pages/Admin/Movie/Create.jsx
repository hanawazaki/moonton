import Authenticated from '@/Layouts/Authenticated/index'
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import Button from '@/Components/Button';
const Create = ({ auth }) => {
  const { setData, post, processing, errors } = useForm({
    name: "",
    category: "",
    video_url: "",
    thumbnail: "",
    rating: "",
    is_featured: false
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === "file" ? event.target.files[0] : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('admin.dashboard.movie.store'));
  };

  return (
    <Authenticated auth={auth}>
      <Head title="Admin - Create Movie" />
      <h1 className='text-xl'>insert a new movie</h1>
      <hr className='mb-4' />
      {/* <InputError message={errors.name} /> */}
      <form onSubmit={submit}>
        <Label forInput="name" value="name"></Label>
        <Input type='text'
          name='name'
          variant='primary-outline'
          handleChange={onHandleChange}
          placeHolder="Enter the name of the movie"
          isError={errors.name}
        />
        <InputError message={errors.name} />
        {/*  */}
        <Label forInput="category" value="Category" className="mt-4" />
        <Input type='text'
          name='category'
          variant='primary-outline'
          handleChange={onHandleChange}
          placeHolder="Enter the category of the movie"
          isError={errors.category}
        />
        <InputError message={errors.category} />
        {/*  */}
        <Label forInput="video_url" value="Video Url" className="mt-4" />
        <Input type='url'
          name='video_url'
          variant='primary-outline'
          handleChange={onHandleChange}
          placeHolder="Enter the video url of the movie"
          isError={errors.video_url}
        />
        <InputError message={errors.video_url} />
        {/*  */}
        <Label forInput="thumbnail" value="Thumbnail" className="mt-4" />
        <Input type='file'
          name='thumbnail'
          variant='primary-outline'
          handleChange={onHandleChange}
          placeHolder="Insert the thumbnail of the movie"
          isError={errors.thumbnail}
        />
        <InputError message={errors.thumbnail} />
        {/*  */}
        <Label forInput="rating" value="Rating" className="mt-4" />
        <Input type='number'
          name='rating'
          variant='primary-outline'
          handleChange={onHandleChange}
          placeHolder="Enter the rating of the movie"
          isError={errors.rating}
        />
        <InputError message={errors.rating} />
        <div className='flex flex-row mt-4 items-center'>
          <Label forInput="is_featured" value="Is Featured" className="mr-3 mt-1" />
          <Checkbox
            name="is_featured"
            handleChange={(e) => setData("is_featured", e.target.checked)}
          />
        </div>
        <Button
          type="submit"
          className="mt-4"
          processing={processing}
        >
          Save
        </Button>
      </form>
    </Authenticated >
  )
}

export default Create