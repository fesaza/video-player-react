import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DialogContainer, TextField, Button } from 'react-md';
import * as videoActions from '../../actions/VideoActions';
import { getClipsSelector } from '../../utils/Utils';

class VideoDetails extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    clip: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
  };

  onChange(property) {
    return (value) => {
      this.setState({
        [property]: value,
      });
    };
  }

  onSave() {
    return () => {
      const { hide, add, selectedIndex } = this.props;
      if (selectedIndex <= 0) {
        add(this.state);
      }
      hide();
    };
  }

  render() {
    const { visible, hide, clip } = this.props;
    const actions = [];
    actions.push({ secondary: true, children: 'Cancel', onClick: hide });
    actions.push(<Button flat primary onClick={this.onSave()}>Save</Button>);
    return (
      <DialogContainer
        id="details-dialog"
        visible={visible}
        onHide={hide}
        actions={actions}
        title="Change something?"
      >
        <TextField
          id="name-field"
          label="Clip name"
          value={clip.name}
          onChange={this.onChange('name')}
          required
        />
        <TextField
          id="start-field"
          label="start"
          type="number"
          value={clip.start}
          required
          onChange={this.onChange('start')}
        />
        <TextField
          id="end-field"
          label="end"
          type="number"
          value={clip.end}
          required
          onChange={this.onChange('end')}
        />
      </DialogContainer>
    );
  }
}

const mapStateToProps = (state, props) => ({
  clip: state.video.selectedIndex > 0 && !props.isAdding ? getClipsSelector(state)[state.video.selectedIndex] : {},
  selectedIndex: props.isAdding ? -1 : state.video.selectedIndex || -1,
});

const mapDispatchToProps = dispatch => ({
  add: clip => dispatch(videoActions.addClip(clip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetails);
