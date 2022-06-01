import {kyaColor} from "../../styles/Layout.style";
import {KyaTag, KyaTags} from "../../styles/Page.style";
import {
    IntroduceCover, IntroduceImage,
    IntroduceImgCover,
    IntroduceInnerText,
    IntroduceText,
    IntroduceTitle
} from "../../styles/Introduce.style";
import {useContext, useMemo} from "react";
import {MediaQueriesContext} from "../../contexts/MediaQueries.context";

export default function Introduce () {
    const { mediaQueries } = useContext(MediaQueriesContext);
    return <IntroduceCover>
        {
            mediaQueries<=1 && <IntroduceImgCover>
                <IntroduceImage src="me.jpg" alt="my picture" />
            </IntroduceImgCover>
        }
        <IntroduceText>
            <IntroduceTitle>
                Shin Hyun (신 현)
            </IntroduceTitle>
            <KyaTags>
                {['Algorithm', 'FrontEnd', 'BackEnd'].map((name) => (
                    <KyaTag backgroundColor={kyaColor.yellow} key={name}>
                        {name}
                    </KyaTag>
                ))}
            </KyaTags>
            <IntroduceInnerText>
                Developer who enjoys being focused
                {/*I'm Computer Software undergraduate student at Hanyang University. <br />*/}
                {/*Now, I worked as a Backend Engineer at EmoticBox. <br />*/}
            </IntroduceInnerText>
        </IntroduceText>
        {
            mediaQueries>1 && <IntroduceImgCover>
                <IntroduceImage src="me.jpg" alt="my picture" />
            </IntroduceImgCover>
        }
    </IntroduceCover>
}
