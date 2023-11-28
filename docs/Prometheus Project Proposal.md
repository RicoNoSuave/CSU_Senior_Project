
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
				1. <a href="#state">Problem Statement</a></br>
				2. <a href="#desc">Project Description</a></br>
				3. <a href="#lang">Proposed Implementation Language(s)</a></br>
				4. <a href="#lib">Libraries, Packages, and Development Kits</a></br>
				5. <a href="#add">Additional Software/Equipment Needed</a></br>
				6. <a href="#motive">Personal Motivation</a></br>
				7. <a href="#future">Future Research Efforts</a></br>
			</td>
		</tr>
	</tbody>
</table>

---
## Problem Statement <a id="state"></a>
<p>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When Andrew Grove, former CEO of Intel, stepped down from his position as chairman in 2005, he gave a word of warning to the computer industry:
<br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Privacy is one of the biggest problems in this new electronic age. At the heart of the Internet culture is a force that wants to find out everything about you. And once it has found out everything about you and two hundred million others, that's a very valuable asset, and people will be tempted to trade and do commerce with that asset. This wasn't the information that people were thinking of when they called this the information age."
	<br><p align="right">-Andrew Grove</p>
In the time since, we have seen sweeping advances in the collection and sale of personal data throughout the internet, to the worry of many. According to Pew Research, 80% of Americans are concerned about the collection and use of personal data for profit, viewing it as a net negative on society. Yet the same percentage feel that they have little to no control over their own personal data on the internet. This problem has been exacerbated by the amount we rely on the internet for basic services such as the free press, which is integral to a free and fair democracy. Again, per Pew Research, 86% of Americans get some form of news through the internet, with half of those that use social media getting the majority of their news from those platforms. This is problematic because, given the short-form nature of social media posts, news access through social media platforms is non-existent. Instead, news is disseminated across these platforms in the form of hyperbolic, inflammatory headlines to grab attention, followed by links to the source material. Yet even when Americans are interested in the headlines shown across their feeds, only 41% of Americans will click on those links to read the associated articles. When surveyed, the number one reason users don't follow through is not wanting to navigate to a different site, partly out of concerns for furthering the spread of their personal data through site-tracking cookies. This reluctance to navigate the broader internet due to privacy concerns, coupled with the dominant method of spreading news across social media, has resulted in a measurable decrease in media literacy; Pew Research shows that users who only get their news from social media are 32% less knowledgeable on current events. This growing lack of media literacy has immesurably harmed the fabric of American society. My thesis is that one way we can increase media literacy is by aggregating news into a single platform focused on readability, and that by doing so in a way that does not collect or share personal data, we can attract a userbase as an alternative to both news sites and social media. I believe that Prometheus, a rust-based newsreader application built to process API calls from NewsAPI.org, can meet this need.
</p>

---
### Project Description <a id="desc"></a>
<p>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prometheus is a rust-based newsreader application that displays both aggregate news data and articles as requested by users through default or customizeable searches. Searches are executed through the newsapi.org platform, ensuring articles are curated from verifiable media sources in a way that does not share any personal data. Prometheus has a setting for country and a setting for category, both of which default to United States and Top Stories respectively. Furthermore, there is a search text box and button. Articles are listed with headlines and descriptions, along with a button to load the article for reading if available, as well as a hyperlink to the article for more content. Prometheus has dark mode support and a font size menu to aid in readability. Lastly, there is a website for downloading Prometheus and a markdown user guide. As a rust-based distribution, executables are available for Windows and Linux operating systems.
</p>

---
### Proposed Implementation Languages <a id="lang"></a>
* Rust
* Javascript
* HTML

---
### Libraries, Packages, and Development Kits <a id="lib"></a>
* Rustup
* React.js
* Node.js
* Express.js
* MongoDB

---
### Additional Software/Equipment Needed <a id="add"></a>
* Laptop/PC

---
### Personal Motivation <a id="motive"></a>
<p>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modern lack of media literacy, and the resulting fertile ground for misinformation, has impacted me deeply. I have lost family and friends both directly and indirectly because of their lack of media literacy. I do not mean that I have just lost relationships; people I held dear have lost their lives due to Covid misinformation alone. I hold no auspices that Prometheus will fix media literacy, but for those I have lost, and those I still have, it is important that I do what I can.
</p>

---
### Future Research Efforts <a id="future"></a>
* Rust
* GUI Development
* MERN Stack Web Development
