
# <img src="../media/prometheus_logo.png" style="width:30px"> Prometheus

---
Student: Ricardo Harris

Degree: Bachelor of Science in Computer Science

Project Advisor: Dr. Sean Hayes

Expected Graduation: December 2023

---

<table>
	<thead>
		<tr>
			<th align="left">
				Table of Contents:
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				1. <a href="#plan">Test Plan</a></br>
				2. <a href="#testing">Test Cases</a><br />
			</td>
		</tr>
	</tbody>
</table>

---
## Test Plan <a id="plan"></a>

### Introduction
<p>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This test plan is made to document the process of testing the viability and performance of the Prometheus Newsreader and Prometheus Website. The goals of this plan is to test these softwares in order to demonstrate sufficient completion and locate potential weaknesses in their development. By following the plan outlined below, each feature of the Prometheus Newsreader and Prometheus Website will be demonstrated to be complete and secure.
</p>

### References
<ul>
 	<li>
		<a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/docs/Prometheus%20Full%20Documentation.md">Full Documentation</a>
	</li>
	<li>
		<a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/docs/Prometheus%20Project%20Proposal.md"">Project Proposal</a>
	</li>
 	<li>
		<a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/docs/Prometheus%20Project%20Requirements.md">Project Requirements</a>
	</li>
 	<li>
		<a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/tests/Prometheus%20Useability%20Testing%20Script.md">Useability Testing Script</a>
	</li>
 	<li>
		<a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/tests/Prometheus%20Enhancement%20Logs.md">Enhancement Logs</a>
	</li>
 	<li>
		<a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/tests/Prometheus%20Test%20Results.md">Test Results</a>
	</li>
</ul>

### Features to be Tested
* Unit validation between the Prometheus Newsreader GUI and NewsAPI.org, including error handling
* Unit mutation by the Prometheus Newsreader for readability
* Downloads from the Prometheus Website
* Cohesive integration between all aspects of the Prometheus Newsreader, and between all aspects of the Prometheus Website
* Proper linking from the Prometheus Newsreader to the Prometheus Website
* Font size and design for both the Prometheus Newsreader and Prometheus Website
* Feature layout for both the Prometheus Newsreader and Prometheus Website
* Minimization, maximization, and closing the Prometheus Newsreader

### Features not to be Tested
* External validation of links from Prometheus Newsreader to articles.

### Approach
The master test plan is as follows:
* Unit Test Plan: Unit testing will be performed to test that the Prometheus Newsreader is sending the appropriate data types to NewsAPI.org, is returning proper data types to the user, and is processing errors natively. Furthermore, the Prometheus Website will be tested that downloads are of the appropriate type and functionality.
* Integration Test Plan: Integration testing is integral to the completion of this project. As such, the Prometheus Newsreader will be tested to ensure that requests are occurring to display new data when submitted by the user. The Prometheus Website will have each page tested to properly link to one another. Lastly, the Prometheus Newsreader will have the "about" button tested to ensure that it correctly leads to the Prometheus Website.
* Useability Test Plan: Useability testing will be performed to rate the useability for both the Prometheus Newsreader and Prometheus Website, as well as the font size, font design, and feature layout for both platforms.

### Pass/Fail Criteria
The user will be able to:
* Set their own API key
* See news as requested through:
  * Topic
  * Country
  * Searches
* Customize displayed news through font size selection
* Access news further via article selection and external links
* Maintain Country, font size, night mode, and API key across repeated instances
* Download distributions of Prometheus Newsreader for both Windows and Linux
* Read usage instructions for the Prometheus Newsreader on the Prometheus Website

Furthermore, both the Prometheus Newsreader and Prometheus Website will achieve an aggregate rating of 8.0/10.0 from the Useability Test Plan.

### Test Deliverables
* Test Plan
* Test Cases
* <a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/tests/Prometheus%20Useability%20Testing%20Script.md">Useability Testing Script</a>
* <a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/tests/Prometheus%20Enhancement%20Logs.md">Enhancement Logs</a>
* <a href="https://github.com/RicoNoSuave/CSU_Senior_Project/blob/master/tests/Prometheus%20Test%20Results.md">Test Results</a>

### Test Environment
* Windows 10 Machine

### Schedule
| Task | Due Date |
|------|----------|
| Generate Test Plan | November 14, 2023 |
| Generate Test Cases | November 14, 2023 |
| Generate Test Script | November 14, 2023 |
| Create Testing Environment | November 15, 2023 |
| Begin Testing | November 15, 2023 |
| End Testing | November 19, 2023 |
| Finalize Results | November 20, 2023 |

### Approvals
Dr. Sean Hayes

## Test Cases<a id="testing"></a>

| Test Scenario                     | Test Type | Test Case | Preconditions | Postconditions | Test Steps | Test Data | Expected Result | Actual Results | PASS/FAIL |
|-----------------------------------|-----------|-----------|---------------|----------------|------------|-----------|-----------------|----------------|-----------|
| Validate API Key                  | Unit Test | Check that NewsAPI.org<br /> returns news data | API Key is acquired | | 1. Go to NewsAPI.org<br /> 2. Copy link on front page<br /> 3. Paste in browser<br /> 4. Press Enter | | JSON of News | JSON of News | PASS |
| Check Frame Existence             | Unit Test | Check that Prometheus loads<br /> a frame | Prometheus is compiled | | 1. Launch Prometheus | | Prometheus loads in a frame | Prometheus loaded in a frame | PASS |
| Missing API Key                   | Integration Test | Check that API Key Menu generates<br /> and tests entry | API Key is acquired, and<br /> Prometheus is compiled and running<br /> for the first time | | 1. Launch Prometheus<br /> 2. Enter "test"<br /> 3. Press Enter<br /> 4. Enter Valid API Key<br /> 5. Press Enter | | 1. Invalid API Key will reload window<br /> 2. Valid API Key will generate news | 1. Invalid API Key reloaded window<br /> 2. Valid API Key generated news | PASS |
| Render Title and Description      | Integration Test | Ensure that Prometheus<br /> loads news titles and descriptions | Prometheus is compiled | | 1. Launch Prometheus | | Prometheus loads news titles and descriptions | Prometheus loaded news titles and descriptions | PASS |
| Render Article Contents           | Integration Test | Ensure that Prometheus<br /> loads articles | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Click on an article | | Prometheus loads available article | Prometheus loaded available article | PASS |
| Check Link Viability              | Integration Test | Check that the "read more"<br /> link opens the browser | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Click on "read more" link on newscard | | Link opens in browser | Link opened in browser | PASS |
| Ensure Refresh Capability         | Integration Test | Ensure that the refresh button requests new news | Prometheus is compiled and internet connected | Internet is disconnected | 1. Launch Prometheus<br /> 2. Check news<br /> 3. Disconnect internet connection<br /> 4. Click refresh button | | News loads, then an error generates because refresh gave no data | News loaded, then an error generated | PASS |
| Validate Error Handling           | Integration Test | Check that Prometheus handles<br /> errors natively | Prometheus is compiled and internet disconnected | Internet is connected | 1. Launch Prometheus<br /> 2. View error information in frame<br /> 3. Connect internet<br /> 4. Reload | | Error information loads in frame, then<br /> resolves when fixed and reloaded | Error information loaded in frame and resolved<br /> when fixed | PASS |
| Validate JSON Conversion          | Unit Test | Check that the Prometheus<br /> Newsreader converts<br /> data to valid types | Prometheus is compiled, running,<br /> and has a valid API key | | 1. Launch Prometheus | | Rendered News Data | Rendered News Data | PASS |
| Validate Variable Mutation        | Unit Test | Check that article publish time<br /> adjusts by local offset | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Click on article<br /> 3. Check time<br /> 4. Adjust timezone in computer settings<br /> 5. Reload article<br /> 6. Check time | | Publish time adjusts based on local timezone | Publish time adjusted based on local timezone | PASS |
| Ensure Menu Support               | Integration Test | Validate that menus load<br /> in Prometheus | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Click on "Top Headlines" | | A menu loads | A menu loaded | PASS |
| Validate Country Menu             | Unit Test | Check that each country<br /> selection works | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Cycle through each country | | Each country loads new articles | Each country loaded new articles | PASS |
| Validate Topic Menu               | Unit Test | Check that each topic<br /> selection works | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Cycle through each topic | | Each country loads new articles | Each country loaded new articles | PASS |
| Ensure Search Capability          | Integration Test | Check the "search" function | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Enter "test" in search box<br /> 3. Click Search | | New articles load related to search topic<br />Search topic displays to user | New articles loaded related to search topic<br />Search topic displayed | PASS |
| Ensure Night Mode Capability      | Integration Test | Test the Night Mode button | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Click Night Mode<br /> 3. Observe icon change<br /> 4. Click Night Mode<br /> 4. Observe icon change | | Night Mode button toggles black/white background<br /> with white/black text, respectively | Night Mode button toggled black/white background<br /> with white/black text, respectively | PASS |
| Ensure Font Size Capability       | Integration Test | Check that each font size<br /> changes the font size in Prometheus | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Cycle through each font size | | Each font size alters text size appropriately | Each font size altered text size appropriately | PASS |
| Ensure Save State Capability      | Integration Test | Ensure that Prometheus saves<br /> Night Mode and Font Size<br /> between runs | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Set new Night Mode and Font Size settings<br /> 3. Close Prometheus<br /> 4. Launch Prometheus | | Night Mode and Font Size persist through runs | Night Mode and Font Size persisted through runs | PASS | 
| Ensure Settings Button Capability | Integration Test | Store Font Size and Country<br /> menus behind Settings button | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Click Settings button<br /> 3. Change Country<br /> 4. Click Settings button<br /> 5. Change Font Size | | Country and Font Size menus are behind Settings button | Country and Font Size menus are behind Settings button | PASS |
| Ensure Custom Frame Functionality | Integration Test | Ensure that the custom frame<br /> displays custom icon, settings button,<br /> maximize/minimize/close buttons,<br /> and is moveable | Prometheus is compiled | | 1. Launch Prometheus<br /> 2. Observe Icon<br /> 3.Observe Settings Button<br /> 4. Drag Prometheus around screen<br /> 5. Maximize Prometheus<br /> 6. Restore Prometheus<br /> 7. Minimize Prometheus<br /> 8. Bring Prometheus up<br /> 9. Close Prometheus | | Frame contains proper elements and functions properly | Frame contained proper elements and functioned properly | PASS |
| Visit Website                     | Integration Test | Ensure that the Prometheus Website<br /> is functional | Prometheus Website is up | | 1. Navigate to the Prometheus Website | | Prometheus Website is functional | Prometheus Website was functional | PASS |
| Validate "About" Link             | Integration Test | Ensure that the "About" link opens<br /> the Prometheus Website | Prometheus is compiled and the Prometheus Website is up | | 1. Launch Prometheus<br /> 2. Click Settings<br /> 3. Click About | | Prometheus Website opens in a browser | Prometheus Website opened in a browser | PASS |
| Test Packages                     | Integration Test | Check that Prometheus launches on both<br /> Windows and Linux operating systems | Prometheus is compiled for Windows and Linux | | 1. Launch a Windows OS<br /> 2. Launch Prometheus Windows Distribution<br /> 3. Note Functionality<br /> 4. Launch a Linux OS<br /> 5. Launch Prometheus Linux Distribution<br /> 6. Note Functionality | 1. Prometheus Windows Distribution<br /> 2. Prometheus Linux Distribution | Prometheus launches on both operating systems | Prometheus launched on both operating systems | PASS |
| Download Prometheus               | Integration Test | Ensure that the download links<br /> in the Prometheus Website initiate downloads<br /> of their respective distributions | Prometheus is compiled for Windows and Linux,<br /> each distribution is loaded into the Prometheus Website server,<br /> and the Prometheus Website is up | | 1. Access the Prometheus Website<br /> 2. Click on Download<br /> 3. Click on Windows download button<br /> 4. Observe download<br /> 5. Click on Linux download button<br /> 6. Observe download | | Respective distributions download properly | Respective distributions downloaded properly | PASS |
| View Documentation                | Integration Test | Validate link from Prometheus Website<br /> to Senior Project Documentation | Prometheus Website is up | | 1. Access the Prometheus Website<br /> 2. Click on Documentation<br /> 3. Observe Documentation on Github | Senior Project Documentation | Browser navigates to Github repo | Browser navigated to Github repo | PASS |
| Useability Testing                | Useability Test | Test the useability of the Prometheus Newsreader<br /> and Website | Prometheus is compiled, Prometheus Website is up,<br />Test environment is open, and the useability testing script is generated | | 1. Follow useability testing script | <a href="https://github.com/RHarris87345/CSU-Senior-Project/blob/master/tests/Prometheus%20Useability%20Testing%20Script.md">Useability Testing Script</a> | Average score of 4.0 | | |
