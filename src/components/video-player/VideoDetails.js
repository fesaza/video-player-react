import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DialogContainer, TextField, Button } from 'react-md';
import * as videoActions from '../../actions/VideoActions';
import { getClipsSelector } from '../../utils/Utils';

const getInitialState = () => ({
  name: '',
  start: '',
  end: '',
});

class VideoDetails extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    clip: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
  };

  state = {};

  componentWillReceiveProps = (nextProps) => {
    this.setState(getInitialState());
    this.setState(nextProps.clip);
  }

  onChange(property) {
    return (value) => {
      this.setState({
        [property]: value,
      });
    };
  }

  onSave() {
    return () => {
      const { hide, save, selectedIndex } = this.props;
      save(this.state, selectedIndex);
      this.setState(getInitialState());
      hide();
    };
  }

  render() {
    const { visible, hide } = this.props;
    const actions = [];
    actions.push({ primary: true, children: 'Cancel', onClick: hide });
    actions.push(<Button flat secondary onClick={this.onSave()}>Save</Button>);
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
          value={this.state.name}
          onChange={this.onChange('name')}
          required
        />
        <TextField
          id="start-field"
          label="start"
          type="number"
          value={this.state.start}
          required
          onChange={this.onChange('start')}
        />
        <TextField
          id="end-field"
          label="end"
          type="number"
          value={this.state.end}
          required
          onChange={this.onChange('end')}
        />
      </DialogContainer>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (props.isAdding) {
    return {
      clip: {},
      selectedIndex: -1,
    };
  }
  return {
    clip: getClipsSelector(state)[state.video.selectedIndex],
    selectedIndex: state.video.selectedIndex,
  };
};

const mapDispatchToProps = dispatch => ({
  save: (clip, index) =>
    (index <= 0 ?
      dispatch(videoActions.addClip(clip)) : dispatch(videoActions.editClip(clip, index))
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetails);
