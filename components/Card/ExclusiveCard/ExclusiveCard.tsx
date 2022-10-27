import React from 'react';
import Image from 'next/image';

export interface IExclusiveCard {
  id: 1,
  photo_name?: string;
  desc?: string;
  title?: string;
  cardType?: string;
  cardInfo?: string;
  cardInfoBg?: 'purple' | 'neon';
}

const ExclusiveCard: React.FC<IExclusiveCard> = ({id, photo_name,cardInfo, cardType,cardInfoBg,  title, desc }) => {
  return (
    <div className="token-card--items w-[382px] rounded-3xl overflow-hidden bg-primary" key={id}>

      <div className="token-img-cont-box relative">

        <div className="tokens-img-wrap relative">
          <div className="token--icons-img w-full h-[520px]">
            <Image
              src={`/images/${photo_name}`}
              alt="tokens-card-img"
              className="token-card-img h-full w-full"
              width="382px"
              height="520px"
            />
          </div>

          <div className="tokens-card-top-cont flex justify-end items-start absolute top-0 left-0 p-5 w-full">
            <span className={['card-updates-info  text-fig-15 uppercase text-secondary block  text-center font-primary font-normal rounded-[100%] w-[62px] h-[62px] leading-[62px]', `bg-${cardInfoBg}`].join(' ')}
            >
             {cardInfo}
            </span>
          </div>



    <div className="token-card-content-box pt-[13px] pb-4 px-6 absolute bottom-0 left-0">
         <h3 className="card-title font-primary font-normal text-fig-32 text-left text-secondary uppercase mb-4">{title}</h3>
        <p className="desc mb-8 text-fig-xs text-left text-secondary font-primary font-normal">{desc}</p>
        <div className="token-cards-bottom flex justify-end w-full">
          <h3 className="card-type font-primary font-normal text-fig-32 text-right text-darkgray uppercase">
           {cardType}
          </h3>
        </div>
      </div>
        </div>

      </div>
    </div>
  );
};

export default ExclusiveCard;