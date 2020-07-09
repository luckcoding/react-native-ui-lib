import _ from 'lodash';
import React, {memo, useCallback} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  LayoutChangeEvent
} from 'react-native';
import {
  Colors,
  Text,
  View,
  withScrollEnabler,
  WithScrollEnablerProps
} from 'react-native-ui-lib';

export type AutoLockScrollViewProps = ScrollViewProps & {
  numberOfItems: number;
};

const AutoLockScrollView = (props: AutoLockScrollViewProps) => {
  const numberOfItems = props.numberOfItems;

  const WithScrollEnabler = withScrollEnabler(
    useCallback(
      (props: WithScrollEnablerProps) => {
        const renderItem = useCallback((index: number) => {
          return (
            <View key={index} style={styles.item}>
              <Text>{index + 1}</Text>
            </View>
          );
        }, []);

        const onContentSizeChange = useCallback(
          (contentWidth: number, contentHeight: number) => {
            _.invoke(props, 'onContentSizeChange', contentWidth, contentHeight);
            _.invoke(
              props,
              'scrollEnablerProps.onContentSizeChange',
              contentWidth,
              contentHeight
            );
          },
          [
            props.onContentSizeChange,
            props.scrollEnablerProps.onContentSizeChange
          ]
        );

        const onLayout = useCallback(
          (nativeEvent: LayoutChangeEvent) => {
            _.invoke(props, 'onLayout', nativeEvent);
            _.invoke(props, 'scrollEnablerProps.onLayout', nativeEvent);
          },
          [props.onLayout, props.scrollEnablerProps.onLayout]
        );

        return (
          <ScrollView
            {...props}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={onContentSizeChange}
            onLayout={onLayout}
            scrollEnabled={props.scrollEnablerProps.scrollEnabled}
          >
            {_.times(numberOfItems, renderItem)}
          </ScrollView>
        );
      },
      [numberOfItems]
    )
  );

  return <WithScrollEnabler {...props} />;
};

export default memo(AutoLockScrollView);

const styles = StyleSheet.create({
  scrollView: {
    height: 240
  },
  scrollViewContainer: {
    alignItems: 'center'
  },
  item: {
    width: 100,
    height: 100,
    margin: 9,
    backgroundColor: Colors.grey40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
