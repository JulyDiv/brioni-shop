import React from "react";

export const CardModalItem = ({ isOpenCard }) => {
  return (
    <section class="card">
      <div class="container">
        <div class="card__line"></div>

        <div class="card-wrapper">
          <div class="card-jackets">
            <div class="card-choice">
              <div class="card-choice__image card-choice__image_1"></div>
              <div class="card-choice__image card-choice__image_2"></div>
              <div class="card-choice__image card-choice__image_3"></div>
              <div class="card-choice__image card-choice__image_4"></div>
              <div class="card-choice__image card-choice__image_5"></div>
            </div>

            <div class="card-main"></div>
          </div>

          <div class="card-info">
            <div class="card-info__select">
              <span class="card-info__articl">
                Product Code UJIG0LO16031100
              </span>
              <img src="img/select-catalog.svg" alt="Icon: select" />
            </div>

            <div class="card-info__name">
              <h3 class="card-info__title">
                Dark grey cashmere and cotton Travel jacket
              </h3>
              <span class="card-info__price">€ 1.379,51</span>
            </div>

            <div class="card-info__color">
              <div class="card-info__line"></div>

              <span class="card-info__choose">Choose your color</span>
              <div class="card-info__color-block">
                <div class="card-info__grey"></div>
                <div class="card-info__black"></div>
              </div>
              <div class="card-info__color-name">
                <span class="card-info__item">Dark grey</span>
                <span class="card-info__item">Black</span>
              </div>

              <div class="card-info__line"></div>
            </div>

            <div class="card-info__size">
              <span class="card-info__choose">Choose your size</span>
              <div class="card-info__size-block">
                <span class="card-info__size-item">44</span>
                <span class="card-info__size-item">46</span>
                <span class="card-info__size-item">48</span>
                <span class="card-info__size-item">50</span>
                <span class="card-info__size-item card-info__size-item-52">
                  52
                </span>
                <span class="card-info__size-item">54</span>
                <span class="card-info__size-item card-info__size-item-56">
                  56
                </span>
                <span class="card-info__size-item card-info__size-item-58">
                  58
                </span>
                <span class="card-info__size-item card-info__size-item-60">
                  60
                </span>
              </div>
              <div class="card-info__line"></div>
            </div>

            {/* <div class="swiper swiper3">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide swiper3-slide3">
                            <div class="swiper3-slide3__image">
                                <img class="swiper3-slide3__image-item" src="img/card-choice-slider-2.png" alt="Photo" />
                            </div>
                        </div>

                        <div class="swiper-slide swiper3-slide3">
                            <div class="swiper3-slide3__image">
                                <img class="swiper3-slide3__image-item" src="img/card-choice-slider-4.png" alt="Photo" />
                            </div>
                        </div>

                        <div class="swiper-slide swiper3-slide3">
                            <div class="swiper3-slide3__image">
                                <img class="swiper3-slide3__image-item" src="img/card-choice-slider-5.png" alt="Photo" />
                            </div>
                        </div>

                        <div class="swiper-slide swiper3-slide3">
                            <div class="swiper3-slide3__image">
                                <img class="swiper3-slide3__image-item" src="img/card-choice-slider-3.jpg" alt="Photo" />
                            </div>
                        </div>

                        <div class="swiper-slide swiper3-slide3">
                            <div class="swiper3-slide3__image">
                                <img class="swiper3-slide3__image-item" src="img/card-choice-slider-1.jpg" alt="Photo" />
                            </div>
                        </div>
                    </div>

                    <div class="swiper-scrollbar swiper3-scrollbar3"></div>
                            </div> */}

            {/* <div class="button-light card-info__button-light">

                <button class="character-button card-info__character-button">Color
                    <img class="button-image card-info__button-image" src="img/arrow-down.svg" alt="arrow" />
                </button>
                <button class="character-button card-info__character-button">Size
                    <img class="button-image card-info__button-image" src="img/arrow-down.svg" alt="arrow" />
                </button>

                </div> */}

            <button class="card-info__button" type="submit">
              ADD TO CART
            </button>
            <p class="card-info__text">
              The Brioni iconic Travel jacket a staple from our Archive, has
              been revised as a contemporary travel piece. This single breasted
              jacket is based on our Virgilio fit but it features two special
              front patch pockets with three different entrances studied for...
              <a class="card-info__link" href="#">
                View all
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
