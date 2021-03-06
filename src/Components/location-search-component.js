import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { getWeatherByCoordinates, getCoordinatesByIp } from "../util/api-util";

class LocationSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    // defaults to Orlando's coordinates
    this.state = {
      latitude: "28.538336",
      longitude: "-81.379234"
    };
  }

  async handleLocationButton() {
    const { dispatch, history } = this.props;

    history.push("/search");

    // get location by ip
    await getCoordinatesByIp()
      .then(results => {
        this.setState({ latitude: results.lat, longitude: results.lon });
      })
      .catch(error => console.error(error));

    // load dark sky results in props
    // send the user to the next page
    await getWeatherByCoordinates(
      `${this.state.latitude},${this.state.longitude}`
    )
      .then(results => {
        dispatch({ type: "DARK_SKY", value: results });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="location-search-box">
        <div className="ip-search-button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleLocationButton()}
          >
            Search By Your Location
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  coordinatesAddress: state.coordinatesAddress
});

export default connect(mapStateToProps)(LocationSearchComponent);
