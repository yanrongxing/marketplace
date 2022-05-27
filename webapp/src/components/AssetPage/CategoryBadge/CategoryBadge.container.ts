import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { locations } from '../../../modules/routing/locations'
import { getSearchWearableSection,getSearchPropsSection } from '../../../modules/routing/search'
import CategoryBadge from './CategoryBadge'
import { MapDispatchProps, OwnProps } from './CategoryBadge.types'

const mapDispatch = (
  dispatch: Dispatch,
  { wearable,props, assetType }: OwnProps
): MapDispatchProps => ({
  onClick: () => {
    if(wearable){
      const category = wearable.category
      const section = getSearchWearableSection(category)
  
      if (!section) {
        throw new Error(`Invalid wearable category ${category}`)
      }
  
      dispatch(push(locations.browse({ assetType, section })))
    }else if(props){
      const category = props.category
      const section = getSearchPropsSection(category)
  
      if (!section) {
        throw new Error(`Invalid props category ${category}`)
      }
  
      dispatch(push(locations.browse({ assetType, section })))
    }

  }
})

export default connect(null, mapDispatch)(CategoryBadge)
