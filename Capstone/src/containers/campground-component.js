import React, { useEffect } from "react";

const Campground = () => {

//need to make api call to campground endpoint

// useEffect(() => {
//     fetch('https://developer.nps.gov/api/v1/campgrounds&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
//     .then((results) => results.json())
//     .then((data) => {
//         console.log("Campgrounds:", data);
//     });

// }, []);

    return(
        <div>
            <h3>Popular Campground Info</h3>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Wonder Lake Campground
        </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <ul>
            <li>
                <img src="/images/campground.jpeg"></img>
                <h6>Address:</h6>
                <p>Wonder Lake Campground is at mile 85 on the Denali Park Road. It offers 28 sites, which are all tent-only.\n\nIt is the closest campground to Denali. Though separated by nearly 26 miles, the sheer size of the mountain makes it loom impressively over Wonder Lake Campground. Cloudy skies can obscure views, and mosquitoes can be fierce, but Wonder Lake on a clear day offers views that will last a lifetime. Bear-proof food lockers are available throughout the campground.</p>
                <h6>Weather:</h6>
                <p>Wonder Lake tends to be cooler and wetter than the park entrance. Expect lows in the upper 30s or 40s each night. Daytime highs are typically in the upper 50s or 60s, though occasional sunny days can result in temps near 80. Mosquitoes are particularly bad most of the summer - bring a headnet!</p>
                <h6>ADA Info:</h6>
                <p>Surfaces in the campground are largely compacted gravel or native soils with roots and rocks. The path from the campground to the bus stop on the Denali Park Road is compacted gravel. Restrooms are wheelchair accessible.</p>
                <h6>RVs:</h6>
                <p>This is a tent-only campground.</p>
                <h6>Amenities:</h6>
                <p>Vault Toilets - year round</p>
                <p>Showers: None</p>
                <p>Capmstore: False</p>
                <p>Potable water: Yes - seasonal</p>
                <h6>Campsites:</h6>
                <p>Group: 0</p>
                <p>Tent: 28</p>
                <p>RV Only: 0</p>
                <p>Total Sites: 28</p>
            </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Campground;