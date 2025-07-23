import React from 'react'
import Badge from '@/components/badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'
import ReactionButton from '@/components/buttons/smButton/Reactionbutton'

interface PostSearchProps {
  imageUrl: string
  title: string
  description: string
  badgeType: string
  views: number
  comments: number
  daysAgo: number
}

function PostSearch({
  imageUrl,
  title,
  description,
  badgeType,
  views,
  comments,
  daysAgo,
}: PostSearchProps) {
  return (
    <div className="rounded-2x1 h-full flex flex-col space-y-3 max-w-[944px]">
      <div className="flex flex-row space-x-2">
        <Badge type={badgeType} />
      </div>

      <div className="flex flex-row gap-6 h-auto">
        <div className="w-full max-w-[368px] h-full max-h-[207px] overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt="imagem do post"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 h-auto flex-1">
          <div className="w-full text-left text-gray-900 font-bold text-[24px]">
            {title}
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="w-full text-left line-clamp-3 text-gray-600 font-normal text-[16px]">
              {description}
            </div>

            <div className="flex gap-2 items-center mt-2">
              <Viewbutton text={views.toString()} />
              <ReactionButton />
              <Commentbutton text={comments.toString()} />
              <span className="mr-auto text-sm text-gray-400 whitespace-nowrap">
                {daysAgo === 0
                  ? 'Hoje'
                  : `${daysAgo} dia${daysAgo > 1 ? 's' : ''} atrás`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostSearch
