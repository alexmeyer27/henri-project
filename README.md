# Retrospective on Submitted Project

Total time: 7:46

Complete:
	1. React Native dependancy management - updated dependancies, podfile for v63+ and removed duplicate vector icons
	2. Redux Implementation - using a pattern I've used before
	3. React Navigation for tab layout - single page for each tab implemented
	4. Basic Thunk implementation - for async actions in redux, I had never used this middleware before but like it a lot (I use saga at work)
	5. Users Tab with associated Redux - using React Native Elements List view for simplicity due to limited response size
	6. Todos Tab using local state rather than Redux - using ListView
	7. JSONPlaceholder API integration with axios
	8. UIFaces API integration with axios
	9. Initial Redux actions and API calls for Feed Tab

Incomplete:
	1. Feed UI/UX
	2. Ability to Add Posts
	3. Ability to Delete Posts
	4. Feed Tab State Management
	5. Better UI styling
	6. Additional ListView optimizations


Remaning Work:
	
The majority of the remaining work for this project is within the Feed tab. While I was able to get the initial API calls setup with the redux action using Thunk middleware, the actual visual implementation of those calls had barely started before I ran up against time.

My last piece of work I could fit in was a function to create a single "combinedPost" object that could be passed into the PostCard component to be rendered on the page. I spent a good amount of time attempting to create that function with the redux actions without success, and ultimately that time ended up delaying me to the point where I ran out of time for the project. The solution to combine the data within the component before rendering the flatlist might have worked, but I am still learning the state management aspect of the React Hooks and had some issues rendering the FlatList given the combinePost function takes a second given the amount of data returned. 

The actual process of creating a new post would have been straightforward. I would have added a textbox with submission button that onPress would have triggered a createpost redux action built with thunk to make the api call. From there I would have appended the post using unshift() to the posts array with the feed namespace in redux, and refreshed the list using a conditional within useEffect on the FeedScreen.

Deleting a post would require creating a delete button or "X" depending on space, then having that button trigger a similar flow to creating a post but with the delete API call and using a posts.filter function to create a new list for redux. The same useEffect trigger would have refreshed the post lists as well.

As another small note, my intent was to create each post as a TouchableOpacity which, when pressed, would expand the comments associated with that post to make them visible. This would have used useState within the PostCard component to manage the visibility of the comments. Furthermore, the intention was to pass in the avatar and names from the user list as well to indicate who created each post.

Finally, the real casuality of running out of time was the styling of the application. Originally I intended to get all of the functionality working before returning to styling with my remaining time. Unfortunately that didn't work out and the styling is unfinished as a result.
