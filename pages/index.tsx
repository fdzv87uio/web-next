import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import React from "react"

import CarouselItem from "../components/CarouselItem/CarouselItem.component"
import SiteWrapper from "../components/SiteWrapper"
import * as S from "../styles/index.styles"

const doodle1 = "/images/doodle1.png"
const doodle2 = "/images/doodle2.png"
const doodle3 = "/images/doodle3.png"

const Items = [
  {
    key: 1,
    text: "It's a simple three step process",
    image: doodle1,
  },
  {
    key: 2,
    text: "We capture two photos",
    image: doodle2,
  },
  {
    key: 3,
    text: "And your fit preferences...",
    image: doodle3,
  },
]

function Index(): JSX.Element {

  return (
    <SiteWrapper>
      <S.PageWrapper>
        <S.CarouselWrapper>
          <S.CustomCarousel>
            {Items.map(item => {
              return (
                <CarouselItem
                  key={item.key}
                  image={item.image}
                  text={item.text}
                />
              )
            })}
          </S.CustomCarousel>
        </S.CarouselWrapper>
        <S.ButtonWrapper>
          <a href="/terms-and-conditions">
            <span>
              Get Started&nbsp;
              <ArrowForwardIcon />
            </span>
          </a>
        </S.ButtonWrapper>
      </S.PageWrapper>
    </SiteWrapper>
  )
}

export default Index
