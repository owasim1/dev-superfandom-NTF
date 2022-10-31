import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import ExclusiveCard, {
  IExclusiveCard,
} from '../Card/ExclusiveCard/ExclusiveCard';
import Link from 'next/link';

const Exclusive: NextPage<any> = ({ collections }) => {
  return (
    <>
      <section className="exclusive-section w-full bg-secondary pt-[92px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-4 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-8">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-primary desktop-l:text-7xl desktop-x:text-6xl  laptop-x:text-6xl md:text-fig-40 uppercase">
              exclusives
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:px-12 xl:px-12 laptop-x:px-0 lg:px-0 md:px-0 sm:px-0">
          <div className="exclusive-content-wrapper px-28 py-12 desktop-l:px-12 md:px-4 md:py-0 sm:pb-8 w-full h-full bg-secondary md:bg-secondary rounded-3xl laptop-x:rounded-none overflow-hidden">
            <div className="exclusive-slidebox">
              <ul className="exclusive-slides-image flex no-wrap gap-5">
                {collections
                  ?.filter(
                    (collection: any) =>
                      collection.contractType === 'continuous'
                  )
                  .map((collection: any) =>
                    collection.nfts.map((nft: any, index: number) => (
                      <Link
                        key={index}
                        href={'/DetailsPage/[id]'}
                        as={`/DetailsPage/${nft._id}`}
                      >
                        <li
                          className="exclusive-image-items w-[382px]  md:w-full md:min-w-[216px]"
                          key={index}
                        >
                          <ExclusiveCard
                            _id={nft._id}
                            image={nft.mediaUrl}
                            description={nft.description}
                            title={nft.title}
                            cardType={'1 nft'}
                            status={undefined}
                            statusColor={undefined}
                          />
                        </li>
                      </Link>
                    ))
                  )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exclusive;
