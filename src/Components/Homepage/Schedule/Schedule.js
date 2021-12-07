import './Schedule.scss';

function Schedule() {
  return (
  <div id="schedule" class="d-flex flex-column justify-content-start">
    <div class="container">
      <h1 id="sched-title" class="day1 display-1 text-right text-secondary py-4 title-size" style="color:#50c6df !important;">Schedule</h1>
      <h2 class="dayhead offset-md-4" style="color:#fef8c0;">Saturday</h2>
      <div class="text-center row">
        <div id="table" class="col-md-3 d-none d-md-block">
            <div class="text-center ml-4 pt-3" style="color:#fef8c0;">
              <div>
                  <h4 style="height:74px;padding:0;margin:0;">9:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">11:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">1:00 PM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">3:00 PM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">5:00 PM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">7:00 PM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">9:00 PM</h4>
              </div>
            </div>
        </div>
        <div id="table" class="col-md-8 ml-3" style="background-color:#fef8c0;">
          <div class=" row no-gutters">
                <div>
                  <div id="content" class="card my-auto card1" style="height:222px;width:50%;top:18px;justify-content: flex-start;">
                      <div class="card-text">
                          <h5 class='card-title'>Check in</h5>
                          <h6 class='card-subtitle small'>
                          9:00 AM - 1:00 PM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="card my-auto card2" style="/*height:19px;*/width:50%;top:75px;">
                      <div class="card-text">
                          <h5 class='card-title'>Team Formation</h5>
                          <h6 class='card-subtitle small'>
                          10:30 AM - 11:00 AM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="offset-6 card my-auto card3" style="height:205px;width:50%;top:93px;">
                      <div class="card-text">
                          <h5 class='card-title'>Partnership Fair</h5>
                          <h6 class='card-subtitle small'>
                          11:00 AM - 4:00 PM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="offset-6 card my-auto card3" style="/*height:19px;*/width:50%;top:54px;">
                      <div class="card-text">
                          <h5 class='card-title'>Opening Ceremony</h5>
                          <h6 class='card-subtitle small'>
                          10:00 AM - 10:30 AM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class=" card my-auto card2" style="height:74px;width:50%;top:148px;">
                      <div class="card-text">
                          <h5 class='card-title'>Lunch</h5>
                          <h6 class='card-subtitle small'>
                          12:00 PM - 2:00 PM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="offset-6 card my-auto card3" style="/*height:37px;*/width:50%;top:296px;">
                      <div class="card-text">
                          <h5 class='card-title'>Lightning Talks</h5>
                          <h6 class='card-subtitle small'>
                          4:00 PM - 5:00 PM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="card my-auto card1" style="height:74px;width:50%;top:394px;">
                      <div class="card-text">
                          <h5 class='card-title'>Dinner</h5>
                          <h6 class='card-subtitle small'>
                          7:00 PM - 9:00 PM
                          </h6>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    </br>



    <div class="container">
      <h2 class="dayhead day2 offset-md-4" style="color:#fef8c0;">Sunday</h2>
      <div class="text-center row">
        <div id="table" class="col-md-3 d-none d-md-block">
            <div class="text-center ml-4 pt-3" style="color:#fef8c0;">
              <div>
                  <h4 style="height:74px;padding:0;margin:0;">12:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">2:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">4:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">6:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">8:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">10:00 AM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">12:00 PM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">2:00 PM</h4>
                  <h4 style="height:74px;padding:0;margin:0;">4:00 PM</h4>
              </div>
            </div>
        </div>
        <div id="table2" class="col-md-8 ml-3" style="background-color:#fef8c0;">
          <div class=" row no-gutters">
                <div>
                  <div id="content" class="card my-auto card1" style="width:50%;top:18px;">
                      <div class="card-text">
                          <h5 class='card-title'>Midnight Snack</h5>
                          <h6 class='card-subtitle small'>
                          12:00 AM - 1:00 AM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="offset-6 card my-auto card3" style="height:242px;width:50%;top:92px;">
                      <div class="card-text">
                          <h5 class='card-title'>Sleep?</h5>
                          <h6 class='card-subtitle small'>
                          2:00 AM - 8:00 AM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="card my-auto card2" style="height:92px;width:50%;top:277px;">
                      <div class="card-text">
                          <h5 class='card-title'>Breakfast</h5>
                          <h6 class='card-subtitle small'>
                          7:00 AM - 9:00 AM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="offset-6 card my-auto card3" style="width:50%;top:388px;">
                      <div class="card-text">
                          <h5 class='card-title'>Submissions Due</h5>
                          <h6 class='card-subtitle small'>
                          10:00 AM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class=" card my-auto card1" style="height:74px;width:50%;top:425px;">
                      <div class="card-text">
                          <h5 class='card-title'>Demos</h5>
                          <h6 class='card-subtitle small'>
                          11:00 AM - 12:30 PM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="offset-6 card my-auto card3" style="height:60px;width:50%;top:498px;">
                      <div class="card-text">
                          <h5 class='card-title'>Lunch</h5>
                          <h6 class='card-subtitle small'>
                          12:30 PM - 1:30 PM
                          </h6>
                      </div>
                  </div>
                  <div id="content" class="card my-auto card2" style="width:50%;top:555px;">
                      <div class="card-text">
                          <h5 class='card-title'>Closing Ceremony</h5>
                          <h6 class='card-subtitle small'>
                          1:30 PM - 2:30 PM
                          </h6>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
</div>

  )
};

export default Schedule;