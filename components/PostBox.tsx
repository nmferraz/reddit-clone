import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'
import { useForm } from 'react-hook-form'

type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

const PostBox = () => {
  const { data: session } = useSession()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <form className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2">
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          type="text"
          placeholder={
            session ? 'Create a post by entering a title' : 'Sign in to post'
          }
        />
        <PhotographIcon className={`h-6 cursor-pointer text-gray-300`} />
        <LinkIcon className="h-6 text-gray-300" />
      </div>

      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              {...register('postBody')}
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional)"
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              {...register('subreddit')}
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              placeholder="i.e. reactjs"
            />
          </div>
        </div>
      )}
    </form>
  )
}

export default PostBox
