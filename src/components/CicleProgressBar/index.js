import { View } from 'react-native';
import { ProgressBar, Content } from 'native-base';

export function CicleProgressBar ({ percent }) {
  const radius = 50; 
  const strokeWidth = 5; 

  const progress = percent / 100; 

  const circleSize = (radius + strokeWidth) * 2; 

  const progressWidth = circleSize * progress; 

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Content
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          borderWidth: strokeWidth,
          borderColor: '#000000',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProgressBar
          styleAttr="Horizontal"
          color="#00FF00"
          indeterminate={false}
          progress={progress}
          width={progressWidth}
          height={strokeWidth}
        />
      </Content>
    </View>
  );
};