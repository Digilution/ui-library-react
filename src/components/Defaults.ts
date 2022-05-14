import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle<any>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme?.typography?.default?.font};
        appearance: none;
    }

    ::-webkit-scrollbar { display: none; }
    ul, li { list-style-position: inside; }

    html {
        font-size: ${({ theme }) => theme?.typography?.default?.size};
        font-weight: ${({ theme }) => theme?.typography?.default?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.default?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.default?.transform};
    }

    body {
        background: ${({ theme }) => theme?.colors?.default?.base};
        color: ${({ theme }) => theme?.colors?.default?.contrast};
        scroll-behavior: smooth;
    }

    a {
        color: ${({ theme }) => theme?.colors?.default?.contrast};
        font-size: ${({ theme }) => theme?.typography?.a?.size};
        font-weight: ${({ theme }) => theme?.typography?.a?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.a?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.a?.transform};
        text-decoration: ${({ theme }) => theme?.typography?.a?.decoration};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme?.typography?.headings?.font};
        font-size: ${({ theme }) => theme?.typography?.headings?.size};
        font-weight: ${({ theme }) => theme?.typography?.headings?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.headings?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.headings?.transform};
    }

    h1 {
        font-family: ${({ theme }) => theme?.typography?.h1?.font};
        font-size: ${({ theme }) => theme?.typography?.h1?.size};
        font-weight: ${({ theme }) => theme?.typography?.h1?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.h1?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.h1?.transform};
    }

    h2 {
        font-family: ${({ theme }) => theme?.typography?.h2?.font};
        font-size: ${({ theme }) => theme?.typography?.h2?.size};
        font-weight: ${({ theme }) => theme?.typography?.h2?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.h2?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.h2?.transform};
    }

    h3 {
        font-family: ${({ theme }) => theme?.typography?.h3?.font};
        font-size: ${({ theme }) => theme?.typography?.h3?.size};
        font-weight: ${({ theme }) => theme?.typography?.h3?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.h3?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.h3?.transform};
    }

    h4 {
        font-family: ${({ theme }) => theme?.typography?.h4?.font};
        font-size: ${({ theme }) => theme?.typography?.h4?.size};
        font-weight: ${({ theme }) => theme?.typography?.h4?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.h4?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.h4?.transform};
    }

    h5 {
        font-family: ${({ theme }) => theme?.typography?.h5?.font};
        font-size: ${({ theme }) => theme?.typography?.h5?.size};
        font-weight: ${({ theme }) => theme?.typography?.h5?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.h5?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.h5?.transform};
    }

    h6 {
        font-family: ${({ theme }) => theme?.typography?.h6?.font};
        font-size: ${({ theme }) => theme?.typography?.h6?.size};
        font-weight: ${({ theme }) => theme?.typography?.h6?.weight};
        letter-spacing: ${({ theme }) => theme?.typography?.h6?.spacing};
        text-transform: ${({ theme }) => theme?.typography?.h6?.transform};
    }
`;

export default Defaults;