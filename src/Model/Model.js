import { Platform, Dimensions } from 'react-native'
const {height, width} = Dimensions.get('window');
const reportedPlatform = Platform.OS
const platform = reportedPlatform
export const model = {
  tab: {
    strings: 6,
    length: 55
  },
  display: {
    platform: platform,
    width: width,
    height: height,
    scaling: .2
  }
}
export default model