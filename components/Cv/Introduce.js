import {kyaColor} from "../../styles/Layout.style";
import {KyaTag, KyaTags} from "../../styles/Cv.style";
import {
    IntroduceCover, IntroduceImage,
    IntroduceImgCover,
    IntroduceInnerText,
    IntroduceText,
    IntroduceTitle
} from "../../styles/Introduce.style";
import {useEffect, useState} from "react";
import {BREAKPOINTS} from "../../styles/MediaQueries";

export default function Introduce () {
    const isClient = typeof window === 'object';
    // const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : undefined);
    const [mediaQueries, setMediaQueries] = useState(0);
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        for (let breakpointIdx=0; breakpointIdx<BREAKPOINTS.length; breakpointIdx++) {
            if (windowWidth < BREAKPOINTS[breakpointIdx]) {
                console.log(windowWidth, breakpointIdx);
                setMediaQueries(breakpointIdx);
                return;
            }
        }
        setMediaQueries(BREAKPOINTS.length);
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <IntroduceCover>
            {
                mediaQueries===0 && <IntroduceImgCover>
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
                    I'm Computer Software undergraduate student at Hanyang University. <br />
                    {/*Now, I worked as a Backend Engineer at EmoticBox. <br />*/}
                </IntroduceInnerText>
            </IntroduceText>
            {
                mediaQueries>0 && <IntroduceImgCover>
                    <IntroduceImage src="me.jpg" alt="my picture" />
                </IntroduceImgCover>
            }

        </IntroduceCover>
    )
}
