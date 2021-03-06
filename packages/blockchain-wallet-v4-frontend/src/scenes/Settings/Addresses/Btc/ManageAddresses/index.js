import React from 'react'
import styled from 'styled-components'
import { reduxForm } from 'redux-form'

import UnusedAddresses from './UnusedAddresses'
import UsedAddresses from './UsedAddresses'

const Wrapper = styled.section`
  box-sizing: border-box;
`
class ManageAddressesContainer extends React.PureComponent {
  render () {
    const walletIndex = this.props.match.params.index
    return (
      <Wrapper>
        <UnusedAddresses walletIndex={walletIndex} />
        <UsedAddresses walletIndex={walletIndex} />
      </Wrapper>
    )
  }
}

export default reduxForm({ form: 'settingsAddresses' })(
  ManageAddressesContainer
)
