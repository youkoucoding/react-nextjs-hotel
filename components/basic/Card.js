import React from 'react';
import Tag from 'components/basic/Tag';
import Grade from 'components/basic/Grade';

function formattedPrice(price) {
  // Intl.NumberFormat オブジェクトは、言語に依存した数値書式を可能にするオブジェクトのコンストラクターです。
  const formatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  });

  return formatter.format(price / 100 / 4);
}

function Card(props) {
  const { property } = props;
  return (
    <div>
      <div className='relative pb-5/6'>
        <img
          className='h-full w-full rounded-lg shadow-md object-cover'
          src={property.imageUrl}
          alt='hotel'
        />
      </div>
      <div className='relative px-4 -mt-16'>
        <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
          <div className='flex items-baseline'>
            <Tag text={'Plus'} color={'teal'} background={'teal'} />
            <div className='ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
              {property.beds} {property.beds === 1 ? 'bed' : 'beds'} &bull;{' '}
              {property.baths} {property.baths === 1 ? 'bath' : 'baths'}
            </div>
          </div>
          <h4 className='mt-1 text-gray-900 font-semibold text-lg'>
            {property.title}
          </h4>
          <div className='mt-1'>
            <span className='text-gray-900'>
              {formattedPrice(property.price)}
            </span>
            <span className='ml-1 text-sm text-gray-600'>/wk</span>
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <Grade
              rating={property.rating}
              color={'teal'}
              background={'grey'}
            />
            <span className='ml-2'>{property.reviewCount} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
