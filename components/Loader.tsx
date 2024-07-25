
import LottieView from "lottie-react-native"
export function Loader({styles , ...props}:any) {
  return (
    <LottieView
      styles={styles}
      {...props}
      source={require("../assets/animations/LottieLego.json")}
      autoPlay
      loop
    />
  )
}
