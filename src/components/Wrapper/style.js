import styled from 'styled-components'

/**
 * BaseWrapper
 * @component
 *
 */
const BaseWrapper = styled.div.attrs(({ options }) => ({
  style: { ...options },
}))``

export default BaseWrapper

/**
 * BaseWrapperArticle
 * @component
 *
 */
export const BaseWrapperArticle = styled.article.attrs(({ options }) => ({
  style: { ...options },
}))``

/**
 * BaseWrapperNav
 * @component
 *
 */
export const BaseWrapperNav = styled.nav.attrs(({ options }) => ({
  style: { ...options },
}))``

/**
 * BaseWrapperSection
 * @component
 *
 */
export const BaseWrapperSection = styled.section.attrs(({ options }) => ({
  style: { ...options },
}))``

/**
 * BaseWrapperAside
 * @component
 *
 */
export const BaseWrapperAside = styled.aside.attrs(({ options }) => ({
  style: { ...options },
}))``
