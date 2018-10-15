
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import * as R from 'ramda';
import { Grid, Cell } from 'react-md';
import { connect } from 'react-redux';
import ClipList from './ClipList';
import VideoPlayer from './VideoPlayer';
import * as videoActions from '../../actions/VideoActions';
import VideoDetails from './VideoDetails';
import { getClipsSelector } from '../../utils/Utils';

class ClipAdmin extends PureComponent {
  static propTypes = {
    clips: PropTypes.array.isRequired,
    loadClips: PropTypes.func.isRequired,
    clipSelected: PropTypes.object.isRequired,
    onClipSelected: PropTypes.func.isRequired,
  }

  state = { visibleDetails: false };

  componentDidMount() {
    const { clips, loadClips } = this.props;
    if (clips.length === 0) {
      loadClips();
    }
  }

  // addClip(){
  //   // show dialog
  // }

  // editClip(){

  // }

  showDetails = () => {
    this.setState({ visibleDetails: true });
  };

  hideDetails = () => {
    this.setState({ visibleDetails: false });
  };

  render() {
    return (
      <div>
        <Grid >
          <Cell size={3}>
            <ClipList
              clips={this.props.clips}
              addClip={this.showDetails}
              onClipSelected={this.props.onClipSelected}
            />
          </Cell>
          <Cell size={9}>
            <VideoPlayer
              clip={this.props.clipSelected}
            />
          </Cell>
        </Grid>
        <VideoDetails
          visible={this.state.visibleDetails}
          hide={this.hideDetails}
        />
      </div>
    );
  }
}

const mapPropsToState = state => (
  {
    clips: [...getClipsSelector(state)],
    clipSelected: { ...getClipsSelector(state)[state.video.selectedIndex] },
  }
);

const mapDispatchToProps = dispatch => ({
  loadClips: () => dispatch(videoActions.loadClips()),
  onClipSelected: index => dispatch(videoActions.selectClip(index)),
});

export default connect(mapPropsToState, mapDispatchToProps)(ClipAdmin);
