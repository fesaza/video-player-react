
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as videoActions from '../../actions/VideoActions';
import VideoDetails from './VideoDetails';
import ClipAdminLayout from './ClipAdminLayout';
import { getClipsSelector } from '../../utils/Utils';

class ClipAdmin extends PureComponent {
  static propTypes = {
    clips: PropTypes.array.isRequired,
    loadClips: PropTypes.func.isRequired,
    clipSelected: PropTypes.object.isRequired,
    onClipSelected: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onDeleteClip: PropTypes.func.isRequired,
  }

  state = { visibleDetails: false };

  componentDidMount() {
    const { clips, loadClips } = this.props;
    if (clips.length === 0) {
      loadClips();
    }
  }

  showDetails = isAdding => () => {
    this.setState({ visibleDetails: true, isAdding });
  };

  hideDetails = () => {
    this.setState({ visibleDetails: false });
  };

  render() {
    return (
      <div>
        <ClipAdminLayout
          clips={this.props.clips}
          showDetails={this.showDetails}
          onClipSelected={this.props.onClipSelected}
          onDeleteClip={this.props.onDeleteClip}
          clipSelected={this.props.clipSelected}
          selectedIndex={this.props.selectedIndex}
        />
        <VideoDetails
          visible={this.state.visibleDetails}
          hide={this.hideDetails}
          isAdding={this.state.isAdding}
        />
      </div>
    );
  }
}

const mapPropsToState = state => (
  {
    clips: [...getClipsSelector(state)],
    clipSelected: { ...getClipsSelector(state)[state.video.selectedIndex] },
    selectedIndex: state.video.selectedIndex,
  }
);

const mapDispatchToProps = dispatch => ({
  loadClips: () => dispatch(videoActions.loadClips()),
  onClipSelected: index => dispatch(videoActions.selectClip(index)),
  onDeleteClip: index => dispatch(videoActions.deleteClip(index)),
});

export default connect(mapPropsToState, mapDispatchToProps)(ClipAdmin);
