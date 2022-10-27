import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import ExclusiveCard, {
  IExclusiveCard,
} from '../Card/ExclusiveCard/ExclusiveCard';

const Exclusive: NextPage<any> = () => {
  const [ExclusiveCards, setExclusiveCards] = useState<any>([]);

  let data = [
    {
      id: 1,
      photo_name: 'exclusive-img-1.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'Live',
      cardInfoBg: 'purple',
    },
    {
      id: 2,
      photo_name: 'exclusive-img-2.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'Live',
      cardInfoBg: 'purple',
    },
    {
      id: 3,
      photo_name: 'exclusive-img-3.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'soon',
      cardInfoBg: 'neon',
    },
    {
      id: 4,
      photo_name: 'exclusive-img-4.png',
      desc: 'Each Mystery Box contains one NFT with unique abilities, allotted at random (and revealed later)',
      title: 'Collection name',
      cardType: 'Nft',
      cardInfo: 'soon',
      cardInfoBg: 'neon',
    },
  ];

  useEffect(() => {
    const items = data;
    setExclusiveCards(items);
  }, []);
  return (
    <>
      <section className="exclusive-section w-full bg-secondary pt-[92px] laptop-m:pt-[65px]  md:pt-8 pb-0 px-0 relative z-10  overflow-hidden">
        <div className="custom-container 2xl:px-0 xl:px-0 desktop-m:px-12 laptop-x:px-12 md:px-5 sm:px-4">
          <div className="section-titlebox text-animetion mb-16 md:mb-4">
            <h2 className="section-title title_animation font-primary font-normal text-fig-3x text-left text-primary laptop-x:text-6xl md:text-fig-40 uppercase">
              exclusives
            </h2>
          </div>
        </div>

        <div className="container 2xl:container xl:container lg:container md:container sm:container 2xl:pl-12 2xl:pr-12 xl:pl-12 xl:pr-12 lg:pl-8 lg:pr-8 md:px-0 sm:px-0">
          <div className="exclusive-content-wrapper px-28 py-12 sm:pb-8 w-full h-full bg-secondary md:bg-secondary sm:rounded-0">
            <div className="exclusive-slidebox">
              <ul className="exclusive-slides-image flex no-wrap gap-5">
                {ExclusiveCards.map(
                  ({
                    id,
                    photo_name,
                    title,
                    desc,
                    cardType,
                    cardInfo,
                    cardInfoBg,
                  }: IExclusiveCard) => (
                    <li className="exclusive-image-items w-[382px] h-[520px]" key={id}>
                      <ExclusiveCard
                        id={id}
                        photo_name={photo_name}
                        desc={desc}
                        title={title}
                        cardType={cardType}
                        cardInfo={cardInfo}
                        cardInfoBg={cardInfoBg}
                      />
                    </li>
                  )
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
