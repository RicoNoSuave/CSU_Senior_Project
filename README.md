
# <img src="./media/prometheus_logo.png" style="width:30px"> Prometheus
---

Student: Ricardo Harris

Degree: Bachelor of Science in Computer Science

Project Advisor: Dr. Sean Hayes

Expected Graduation: December 2023

---

## Description

This project is a newsreader application built in the Rust programming language. It operates as a GUI for the user, sourcing news from http://newsapi.org/.

## Compile/Deploy

To compile this project, it will require several pre-existing conditions. First, <a href="https://www.rust-lang.org/tools/install">install Rust</a>, 
<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">NPM, and Node</a>. To compile the Prometheus newsreader application, download the Prometheus/ file from src, then run:
```
cargo run;
```
To run the web application, create a react project using:
```
npx create-react-app <project name>;
```
Install react-router-dom in your project by:
```
cd <project name>;
npm install react-router-dom;
```
Then copy the prometheus_website/public/ and prometheus_website/src/ files from the src folder to your react application. Lastly, run:
```
npm start;
```
To publish your copy of the web application to your default port. Navigate to localhost:xxxx and enjoy!

## Usage

The web application is a demonstration of modern distribution methods of software. It describes the Prometheus Newsreader Application, contains download links, and contains the usage methods of the Prometheus Newsreader Application, as shown below.
<center>
				<h1 className="Title">Download</h1>
				<h3>
						Download for your Operating System:
				</h3>
				<table className="Download">
					<thead>
						<tr>
							<th>
								Windows Instructions
							</th>
							<th></th>
							<th>
								Linux Instructions
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td align="center">
								<img alt="Windows" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />
								&nbsp;&nbsp;: click&nbsp;
								<a href='/Prometheus Windows Release 1.0.exe' download>
									here
								</a>
							</td>
							<td width="10px" rowSpan="3">
								<div className="Line">
								</div>
							</td>
							<td align="center">
							<img alt="Linux" width="30px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
								&nbsp;&nbsp;: click&nbsp;
								<a href='/Prometheus Linux Release 1.0.tgz' download>
									here
								</a>
							</td>
						</tr>
						<tr>
							<td>
								To install for Windows:
								<ol>
									<li>Move installation file to destination</li>
									<li>Double click</li>
									<li>Enjoy</li>
								</ol>
							</td>
							<td>
								To install for Linux:
								<ol>
									<li>Move installation file to destination</li>
									<li>Unpack</li>
									<li>Enjoy</li>
								</ol>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="Display">
					<thead>
						<th colSpan="2">
							<h3>How to Use</h3>
						</th>
					</thead>
					<tbody>
						<tr>
							<td width="310px" rowSpan="2">
								<img src="images/first_start.png" alt="startup" height="500px" />
							</td>
							<th>
								Running for the First Time
							</th>
						</tr>
						<tr>
							<td>
								When loading Prometheus for the first time, you will find this prompt.&nbsp;
								To begin using Prometheus, follow these steps:
								<ol>
									<li>
										Visit <a href="https://www.newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a>
									</li>
									<li>
										Create your own account
									</li>
									<li>
										Copy your API key
									</li>
									<li>
										Paste in Prometheus
									</li>
								</ol>
								After this, just press enter and you will have access to Prometheus!
							</td>
						</tr>
					</tbody>
					<tr>
						<td colSpan="2">
							<br />
							<hr />
							<br />
						</td>
					</tr>
					<tbody>
						<tr>
							<th>
								Changing Topics
							</th>
							<td width="310px" rowSpan="8">
								<img src="images/headlines.png" alt="headlines" height="500px" />
							</td>
						</tr>
						<tr>
							<td>
								To change topics, just click the menu at the top of the application.
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
					</tbody>
					<tr>
						<td colSpan="2">
							<br />
							<hr />
							<br />
						</td>
					</tr>
					<tbody>
						<tr>
							<td width="310px" rowSpan="8">
								<img src="images/article.png" alt="headlines" height="500px" />
							</td>
							<th>
								Accessing Articles
							</th>
						</tr>
						<tr>
							<td>
								To access an article in Prometheus, you just need to click the "Read Article"&nbsp;
								button.
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
						<tr>
							<td>
								<br />
							</td>
						</tr>
					</tbody>
					<tr>
						<td colSpan="2">
							<br />
							<hr />
							<br />
						</td>
					</tr>
					<tbody>
						<tr>
							<th>
								Searching for Articles
							</th>
							<td width="310px" rowSpan="2">
								<img src="images/search.png" alt="search" height="500px" />
							</td>
						</tr>
						<tr>
							<td>
								<br />
								Alternatively, you can search for articles using the search button.&nbsp;
								There are several ways you can search for a term:
								<ul>
									<li>Enter a term for a general search</li>
									<li>For an exact match, surround your phrase with quotes</li>
									<ul><li>"example"</li></ul>
									<li>For words that must appear, prepend them with a + symbol</li>
									<ul><li>include this +example</li></ul>
									<li>You can further customize your search using AND/OR/NOT</li>
									<ul><li>search this NOT that</li></ul>
								</ul>
							</td>
						</tr>
					</tbody>
					<tr>
						<td colSpan="2">
							<br />
							<hr />
							<br />
						</td>
					</tr>
					<tbody>
						<tr>
							<td width="310px" rowSpan="2">
								<img src="images/settings.png" alt="search" height="500px" />
							</td>
							<th>
								Settings
							</th>
						</tr>
						<tr>
							<td rowSpan="3">
								There are several settings you can use to customize&nbsp;
								your experience.
								<ul>
									<li>To access the Country and Text Size menus, click the Settings button at the top of the frame</li>
									<ul>
										<li>You can scroll through the list of available countries</li>
										<li>You can also set a new text size for readability</li>
									</ul>
									<li>If you like a darker experience, you can toggle Night Mode</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</center>

## Testing
For testing, please see testing documentation in /tests

