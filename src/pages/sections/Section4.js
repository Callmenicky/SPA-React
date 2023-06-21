import React from 'react';
import '../HomePage.css';

function Section4() {
  // Your component code here
  return (
    <div className = "section4">
      <h1>Unforgettable Results</h1>
              
              <div className ="ur_whole">
                <div className = "ur_left">
                  <div className = "ur_left_1">
                    <div>400%</div>
                    <div>increase in organic page views</div>
                    <div>Using our SEO services, it also resulted in a 109% increase in page visibility</div>
                  </div>

                  <div>
                    <div className = "ur_left_2">
                      <div>96%%</div>
                      <div>faster page launches</div>
                      <div>Using AEM, a leading Telco saw these results</div>
                    </div>
                  </div>

                  <div>
                    <div className = "ur_left_3">
                      <div>38%%</div>
                      <div>conversion rate improvement</div>
                      <div>Using Adobe Target to A/B test landing pages’ forms, we saw an increase in conversion rate</div>
                    </div>
                  </div>
                </div>

                <div className = "ur_right">
                  <div className = "ur_right_1">
                    <div>4.5%</div>
                    <div>increase in sales</div>
                    <div>Through our creative services, a national automaker experienced a 4.5% increase in sales amidst a -4.6% market decline. They also had a 2% increase in market share, and a 5.6 point shift in brand perception</div>
                  </div>
                  
                  <div className = "ur_right_2">
                    <div>71%</div>
                    <div>reduction in cpl</div>
                    <div>After optimising the performance media funnel, a leading bank saw savings over AUD$300 in the first year</div>
                  </div>
                </div>

              </div>
    </div>
  );
}

export default Section4;
