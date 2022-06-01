import ProjectListItem from "./ProjectListItem";
import {StyledProjectList} from "../../styles/Projects.style";

export default function ProjectList () {
    return <StyledProjectList>
            <ProjectListItem
                date='2022'
                title='This Site'
                coverImageUrl='/projects/thissite.png'
                contents='Stack: React, Next.js, Context, Emotion, Vercel'
                url={false}
            />
            <ProjectListItem
                date='2022'
                title='LaTeX Online Lecture'
                coverImageUrl='/projects/latex.png'
                contents='Inflearn LaTeX Tutorial for Beginners '
                url='https://www.inflearn.com/course/latex-코드-컴파일-pdf-입문?inst=865da8cf'
            />
            <ProjectListItem
                date='2020'
                title='hyu-barami.github.io'
                coverImageUrl='/projects/hyu-barami.png'
                contents='Set up the 2020, 2021 exhibition blog site using jekyll theme and review using pull request for club members'
                url='https://github.com/hyu-barami'
            />
        <ProjectListItem
            date='2020'
            title=' i18n-language.js'
            coverImageUrl='/projects/i18n-language.png'
            contents='(☆18, downloads 2K/year) Simple i18n language with Vanilla Javascript'
            url='https://www.npmjs.com/package/i18n-language'
        />
        <ProjectListItem
            date='2020'
            title='three-slash'
            coverImageUrl='/projects/threeslash.png'
            contents='(☆10) LaTeX document design'
            url='https://github.com/kyaryunha/tex-design-three-slash'
        />
    </StyledProjectList>
}
