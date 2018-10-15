
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-md';
import { connect } from 'react-redux';
import ClipList from './ClipList';
import VideoPlayer from './VideoPlayer';
import * as videoActions from '../../actions/VideoActions';
import VideoDetails from './VideoDetails';

class ClipAdmin extends PureComponent {
  static propTypes = {
    clips: PropTypes.array.isRequired,
    loadClips: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { clips, loadClips } = this.props;
    if (!clips) {
      loadClips();
    }
  }

  addClip(){
    // show dialog
  }

  editClip(){

  }

  render() {
    return (
      <div>
        <Grid >
          <Cell size={3}>
            <ClipList clips={this.props.clips} addClip={this.addClip} />
          </Cell>
          <Cell size={9}>
            <VideoPlayer />
          </Cell>
        </Grid>
        <VideoDetails />
      </div>
    );
  }
}

const mapPropsToState = state => (
  {
    clips: state.video.clips,
  }
);

const mapDispatchToProps = dispatch => ({
  loadClips: dispatch(videoActions.loadClips()),
});

export default connect(mapPropsToState, mapDispatchToProps)(ClipAdmin);
