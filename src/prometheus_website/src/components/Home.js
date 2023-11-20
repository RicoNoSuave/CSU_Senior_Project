import React from "react";
import Nav from "./Navbar";

const Home = () => {
	return (
		<>
			<Nav />
			<center>
				<h1 className="Title">Welcome to Prometheus!</h1>
				<table className="Standard">
					<tr>
						<td>
							<p>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prometheus is a memory-secure newsreader application built in Rust. All news is sourced from<br />
								<a href="https://www.newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a>, a continuation of the Google News API. Using this application, you can view top news&nbsp;
								stories in the country of your choice. You can also view news by category, including: Business,&nbsp;
								entertainment, health, science, sports, and technology. If you need news on a particular topic, you are&nbsp;
								also able to search using your own custom terms. Lastly, you can enhance your readability experience&nbsp;
								by adjusting the font size of the application and toggling night mode.<br /><br />
								Thank you for taking the time to use our product! If you wish to see more work by the developer, you&nbsp;
								can find their portfolio <a href="https://riconosuave.github.io/portfolio" target="_blank" rel="noopener noreferrer">here</a>, or contact them <a href="mailto:ricardo.e.harris@gmail.com">here</a>!
							</p>
						</td>
					</tr>
				</table>
				<img src="images/running.png" alt="Prometheus" height="1000px" />
			</center>
		</>
	)
}

export default Home;