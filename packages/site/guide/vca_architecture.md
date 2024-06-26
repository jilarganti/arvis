---
MIND VIDEO CONFERENCING SERVICE
---

---

::: tip 📝 Suggest changes to this page
[![Edit](https://developer.stackblitz.com/img/edit_in_web_publisher_small.svg)](https://pr.new/jilarganti/arvis/edit/main/apps/site/guide/vca_architecture.md?initialPath=%2Fguide%2Fvca_architecture)
:::

---

REVISION HISTORY

---

| Ver. | Description of Change                                                                                                                                                                                                                                  | Author                             | Date        | Approved By  | Effective Date |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ----------- | ------------ | -------------- |
| 1.0  | Initial version of SAD for Video Call API service (like Zoom)                                                                                                                                                                                          | Ivan Fediaev                       | 16-May-2024 | Ivan Fediaev | 16-May-2024    |
| 1.1  | Removed requirements for unnecessary APIs (Chats, Calendar, Meetings Polls/Template/Trash bin/On-Demand recordings/Surveys/Archiving), updated document structure, updated release plan, added comparison of frameworks for frontend (React.js/Vue.js) | Viacheslav Korogoin / Ivan Fediaev | 03-Jun-2024 | Sergey Fomin | 03-Jun-2024    |

# 1 Executive Summary

This document provides an architectural overview of a video conferencing service designed to meet your business\'s needs
for effective communication and collaboration. The system is divided into several key components that provide
flexibility, scalability and security.

**API and Compatibility:**

- API: The provided API copies the functionality of the popular Zoom service, including similar methods and data
  input/output models.

- Integration with Mind API and Mind SDK: The service is tightly integrated with the existing Mind API and Mind SDK,
  making it easy to interact with other products and services in your organization.

**Main functions:**

- **User Authentication**: Using modern authentication methods to ensure access security.

- **Conference management**: Ability to create, modify, delete and obtain video conferences information.

- **Advanced Conferencing Options**: Supports real-time speech-to-text transcription (with limitations), AI analysis
  of transcripts, APNS (for iOS picture-in-picture mode support for service clients), and conference
  recording and recovery capabilities.

- **Screen sharing**: Functionality for participants screen sharing.

- **Participant Management**: Ability to register, manage and delete conference participant settings.

- **Quality of Service Monitoring**: Enables real-time monitoring and analysis of network traffic for participants in
  video conference calls, helping to proactively identify and troubleshoot quality of service issues.

**Security:**

- The system uses two types of tokens (application token and participant token) to differentiate access and
  operations, ensuring a high level of security.

**Microservice Architecture:**

- The application is based on a microservice architecture, which allows to easily scale individual system components
  depending on current needs and load.

This document is intended to provide company management with an overview of the structure and capabilities of a video
conferencing service, allowing you to make informed decisions regarding the implementation and use of this system in
your organization.

# 2 Introduction

## 2.1 Definitions, Acronyms, Abbreviations

---

Abbreviation or Definition
Acronym

---

AI Summarizer AI-based call transcript analysis service https://docs.sum-up.online/

Mind API Video conferencing API https://api.mind.com/

Mind SDK SDK for video calls management https://gitlab.com/mindlabs/api/sdk/web

---

## 2.2 Solution Architecture Document Scope

The primary purpose of this section is to ensure clarity and mutual understanding among all stakeholders. This
facilitates alignment of expectations, directs architectural efforts, and guarantees approval of outcomes and a clear
understanding of the action plan before the commencement of architecture development.

# 3 Context

## 3.1 Technology Strategy

As part of the development of our video conferencing service, we aim to create an architecture that aligns with
cutting-edge technological standards and supports our business goals. Based on current technological trends, we have
chosen Node.js and Nest.js as the foundation our backend. These technologies not only ensure scalability and reliability
but also reduce the risk of developing unsafe code by using TypeScript with strict typing. We actively use
containerization with Docker and Kubernetes to facilitate the deployment and scalability of our services.

### 3.1.1 Framework comparison

#### Comparison Matrix: Next.js (React.js) vs Nuxt.js (Vue.js)

| Feature/Aspect                  | [Next.js](https://trends.builtwith.com/framework/Next.js) [(React.js)](https://trends.builtwith.com/javascript/React) | [Nuxt.js](https://trends.builtwith.com/framework/Nuxt.js) [(Vue.js)](https://trends.builtwith.com/javascript/Vue) |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **GitHub Stars**                | **114k+(210k+)**                                                                                                      | 51k+(220k+)                                                                                                       |
| **GitHub Commits**              | **20k+**                                                                                                              | 7.5k+                                                                                                             |
| **GitHub Contributors**         | **1.5k+**                                                                                                             | 450+                                                                                                              |
| **Questions on Stack Overflow** | **18k+**                                                                                                              | 10k+                                                                                                              |
| **Live Websites**               | **117k+(2M+)**                                                                                                        | 23k+(1M+)                                                                                                         |
| **Popular Websites**            | Hulu, Twitch, GitHub, TikTok (Facebook, Instagram, Airbnb, Netflix)                                                   | GitLab, Nespresso, Orange, Wizzair (Alibaba, Xiaomi, GitLab)                                                      |
| **Trends**                      | **Higher growth in searches and job postings**                                                                        | Steady growth in searches and job postings                                                                        |
| **Performance**                 | Excellent (Optimized for SSR, SSG, hybrid rendering)                                                                  | Excellent (Optimized for SSR, SSG, hybrid rendering)                                                              |
| **Scalability**                 | Highly scalable with incremental static regeneration, API routes, and serverless functions                            | Highly scalable with built-in modules and flexible configurations                                                 |
| **Documentation**               | Comprehensive, regularly updated, extensive examples                                                                  | Comprehensive, beginner-friendly, extensive examples                                                              |
| **Ecosystem**                   | Rich ecosystem with plugins and integrations (e.g., Vercel, Now, NextAuth)                                            | Rich ecosystem with modules and plugins (e.g., Axios, PWA, Auth)                                                  |
| **Count of Libraries/Packages** | **5000+ packages available via npm (10000+ packages available via npm)**                                              | 3000+ modules and plugins available via npm (6000+ packages and plugins available via npm)                        |

#### Conclusion

**Choose Next.js (React.js) if:**

- You need a highly scalable solution for large-scale applications.
- React is more widely adopted, better supported, and has a larger amount of documentation and community resources,
  including numerous articles on Stack Overflow and other platforms.
- You require a robust ecosystem with extensive third-party libraries and tools.
- You prioritize performance and need advanced features like incremental static regeneration and serverless functions.
- Your team has experience with or prefers React.

**Choose Nuxt.js (Vue.js) if:**

- You prefer an easier learning curve and more intuitive framework.
- Your project benefits from integrated modules and plugins within a comprehensive framework.
- Your team has experience with or prefers Vue.js.

## 3.2 Business Architecture

As a strategic decision, we maintain compatibility with the current Mind API, which allows us to expand functionality
without losing performance of existing services. The development of an API Gateway is a key element for integration with
additional services such as AI Summarizer for transcript analysis, as well as integration with calendar systems to
manage meeting scheduling.

## 3.3 Data Architecture

For data storage, we use MongoDB due to its high performance when handling large volumes of unstructured data and ease
of scaling. PostgreSQL is used for storing structured data such as user profiles, ensuring reliability and security of
critical information.

## 3.4 Infrastructure Architecture

Our approach to infrastructure is based on the use of microservices deployed in containers, which ensures flexibility
and system resilience to changes. This solution provides the ability to use various cloud providers without being tied
to one, which is critically important for ensuring redundancy and cost optimization.

## 3.5 Application Architecture

Adopting a microservices architecture allows us to efficiently distribute workload, localize problems, and accelerate
the processes of development and introduction of new features. The implementation of a REST API provides flexibility in
interaction with client applications and other systems, supporting a high level of modularity and reusability of
components.

## 3.6 Security Architecture

Security is of paramount importance in the architecture of our solution. We apply modern data protection methods,
including encryption at the transport level and authentication based on OAuth and OpenID Connect standards, allowing us
to protect users\' personal data and ensure system resilience to external threats.

# 4 Requirements

Before developing an architectural solution, it is critical to understand the system requirements. The aspects described
below are supposed to ensure complete understanding.

## 4.1 Business Goals, associated with solution

The following key business goals were identified:

1.  **Create Zoom API like interface:**

    - Developing a Zoom API compatible solution would ease the transition for customers already using Zoom API without
      making significant changes to their current systems.

2.  **Improve Communication Using AI:**

    - AI tools integration to analyze transcripts of conversations, as well as specially trained agents creation would
      help improve the efficiency of communication and processes within the organization.

3.  **Integration with Existing IT Infrastructure:**

    - Ensuring smooth integration of the new system with existing tools and services via Mind API and Mind SDK.

## 4.2 Functional requirements

### 4.2.1 User Authentication

As part of the development of the video conference service, it is planned to implement the following requirements to the
authentication system:

1.  **Usage of OAuth 2.0:**

    - The service will support the OAuth 2.0 standard for user authentication. This will allow users to log in
      securely by providing access to their data through our API using access tokens that provide a secure experience
      for client applications.

- **/auth/oauth/token**: Endpoint for obtaining, renewal, and revoking access tokens. Must support different grant
  types such as authorization_code, refresh_token, and client_credentials.

- **Request example**: POST with parameters such as client_id, redirect_uri, client_secret, code (for
  authorization_code flow).

2.  **Multi-factor Authentication:**

    - Multi-factor authentication is provided to enhance security. This requirement is intended to provide an
      additional layer of protection when accessing sensitive functions and data.

- **/auth/mfa/setup**: Configuring multi-factor authentication for a user.

- **/auth/mfa/verify**: Checking the multi-factor authentication code during the login process.

3.  **Token Management:**

    - The system will include token lifecycle management, including issuance, renewal and revocation. This approach
      ensures that access to resources can be controlled and quickly revoked if necessary.

- **/auth/tokens**: Obtaining a list of all active user tokens to manage them.

- **/auth/token/revoke**: Revocation of an access token by its identifier.

4.  **Security and Privacy:**

    - All methods must comply with current security standards, including the protection of personal data in accordance
      with GDPR and other regulatory requirements.

### 4.2.2 Meeting API

This section describes the requests related to the conference management API. This API provides methods for creating,
modifying, and deleting conferences, as well as managing various aspects of video conferences, invitation links, and more.
Our API is similar to the Zoom API and uses similar methods and data models.
Detailed information about the Zoom API methods is available at: [Zoom Meeting
API](https://developers.zoom.us/docs/api/rest/meeting/). Additionally, it outlines how we can leverage the Mind API in
implementing these methods.

#### Create A Meeting

<details>
**Conference Creation API Requirements:**

1.  **Endpoint:** POST /users/{userId}/meetings

- Uses \`userId\` to determine the owner of the conference, similar to the Zoom API, where userId is the applicationId
  in the Mind API.

2.  **Request parameters:**

- \`topic\`: Conference name.

- \`type\`: Type of conference (e.g., instant or scheduled).

- \`start_time\`: Conference start time (required for scheduled conferences).

- \`duration\`: The duration of the conference in minutes.

- \`timezone\`: Time zone in which the conference will be held.

- \`password\`: Conference login password (optional).

- \`agenda\`: Conference agenda (optional).

3.  **Additional parameters:**

- \`settings\`: Conference settings, including video management, audio management, and other options.

4.  **Mind API Integration:**

- **Transparent integration:** All calls to our API to create conferences will be converted and redirected to the
  appropriate Mind API endpoints.

- **Server-side logic:** Adding logic for error handling, data validation, and converting request parameters to a
  format supported by the Mind API.

- **Authentication and Authorization:** Control access and verify user rights to create conferences through mechanisms
  provided by Mind API.

**Request body example:**

{

\"topic\": \"Board Meeting\",

\"type\": 2,

\"start_time\": \"2023-12-09T12:00:00Z\",

\"duration\": 60,

\"timezone\": \"Europe/Berlin\",

\"password\": \"123456\",

\"agenda\": \"Quarterly Review\",

\"settings\": {

\"host_video\": true,

\"participant_video\": true,

\"join_before_host\": false,

\"mute_upon_entry\": true,

\"watermark\": true,

\"use_pmi\": false

}

}

**Server response**:

{

\"id\": \"unique_meeting_id\",

\"topic\": \"Board Meeting\",

\"start_time\": \"2023-12-09T12:00:00Z\",

\"duration\": 60,

\"timezone\": \"Europe/Berlin\"

}

This API structure allows Zoom customers to easily adapt to using our service, while allowing us to leverage the
conferencing management capabilities of the Mind API to ensure the reliability and scalability of our solution.

</details>

#### Create Meeting\'s Invite Links

This section details the functional requirements for generating a batch of invitation links for a specific meeting,
allowing hosts to efficiently manage guest invitations.

<details>
**Functional Requirements for Creating Meeting Invitation Links:**

**Endpoint for Creating Meeting Invitation Links**:

- POST /meetings/{meetingId}/invite_links

**Permissions**:

- Required Scopes: **meeting:write:admin**, **meeting:write**

**Path Parameters**:

- **meetingId** (int64, required): The ID of the meeting for which the invitation links are being created. Ensure this
  ID is stored as a long format integer to accommodate large values.

**Request Body** - Invite Links Object:

- **attendees** (array of objects): List of attendees for whom invitation links will be generated. This array must
  contain at least 1 and no more than 500 attendees.

  - **name** (string): User display name for each attendee, limited to 64 characters.

  - **ttl** (integer): Time-to-live for each invite link, specifying how long (in seconds) the link remains valid.
    The default is 7200 seconds (2 hours), with a maximum allowable duration of 7776000 seconds (90 days).

**Rate Limit**:

- Light

**Server Responses:**

- **201 Created**: Successfully created the meeting invitation links.

**Example Request:**

POST /meetings/{meetingId}/invite_links

Content-Type: application/json

{

\"attendees\": \[

{

\"name\": \"John Doe\",

\"ttl\": 3600

},

{

\"name\": \"Jane Smith\",

\"ttl\": 7200

}

\]

}

**Example Response:**

{

\"attendees\": \[

{

\"join_url\": \"https://example.com/meetings/85746065/join?token=abc123\",

\"name\": \"John Doe\"

},

{

\"join_url\": \"https://example.com/meetings/85746065/join?token=def456\",

\"name\": \"Jane Smith\"

}

\]

}

This feature simplifies the process of distributing meeting access to multiple attendees, providing each with a unique,
timed link that enhances security and meeting management. This system is particularly useful for large meetings where
control over participant access is critical.

</details>

#### Delete A Meeting

This section outlines the functional requirements for deleting a scheduled meeting , providing the ability to
manage and cancel meetings as needed efficiently.

<details>
**Functional Requirements for Deleting a Meeting:**

**Endpoint for Deleting a Meeting**:

- DELETE /meetings/{meetingId}

**Permissions**:

- Required Scopes: **meeting:write:admin**, **meeting:write**

**Path Parameters**:

- **meetingId** (int64, required): The unique identifier of the meeting to be deleted. Ensure this ID is stored as a
  long format integer, as meeting IDs can exceed 10 digits.

**Query-String Parameters**:

- **occurrence_id** (string, optional): Specifies the ID of a specific occurrence of a recurring meeting or webinar.
  This is used when only one instance of a recurring series needs to be deleted.

- **schedule_for_reminder** (boolean, optional): If set to true, notifies the host and alternative hosts about the
  meeting cancellation via email. Defaults to false.

- **cancel_meeting_reminder** (boolean, optional): If set to true, notifies registrants about the meeting cancellation
  via email. The default is false.

**Rate Limit**:

- Light

**Server Responses:**

- **204 No Content**: Indicates successful deletion of the meeting, without returning any content.

**Example Request:**

DELETE /meetings/{meetingId}?occurrence_id=1648194360000&schedule_for_reminder=true&cancel_meeting_reminder=true

This feature is crucial for meeting administrators, allowing them to manage meeting schedules effectively and
communicate changes to participants promptly. It ensures that the meeting landscape within an organization remains
flexible and responsive to changes in availability or meeting requirements.

</details>

#### Getting A Meeting

This section outlines the functional requirements for retrieving detailed information about a meeting in our service.
This feature mirrors the functionality provided by Zoom API, enhanced with backend integration using Mind API to enrich
the data where necessary.

<details>
**Functional Requirements for Retrieving a Meeting:**

**Endpoint for Retrieving a Meeting**:

- GET /users/{userId}/meetings/{meetingId}

**Parameters**:

- **userId** (string, required): The unique identifier for the user under whose account the meeting was created.

- **meetingId** (string, required): The unique identifier of the meeting to be retrieved.

**Detailed Response Fields Explanation:**

- **id** (integer): Unique identifier of the meeting in long format.

- **uuid** (string): Unique meeting ID for each instance; use this for detailed API calls related to specific meeting
  occurrences.

- **host_id** (string): The ID of the user who is set as the host of the meeting.

- **host_email** (email): Email address of the meeting host.

- **type** (integer): Indicates the type of the meeting (e.g., instant, scheduled, recurring).

- **topic** (string): The topic or title of the meeting.

- **status** (enum): Current status of the meeting (e.g., waiting, started).

- **start_time** (date-time): Scheduled start time of the meeting.

- **duration** (integer): Planned duration of the meeting in minutes.

- **timezone** (string): Timezone in which the meeting is scheduled.

- **created_at** (date-time): The creation time of the meeting.

- **agenda** (string): Description or agenda of the meeting.

- **join_url** (string): URL for participants to join the meeting.

- **pmi** (string): Personal Meeting ID used for recurring meetings.

**Enhanced Data Integration with Mind API**:

- Additional participant details and customization options enabled by Mind API integration.

- Enhanced security features such as encrypted passwords for third-party endpoints and detailed control over meeting
  access settings.

**Server Responses**:

- **200 OK**: Successfully retrieved the meeting details including both basic and enhanced information.

- **404 Not Found**: No meeting found with the provided identifiers.

- **403 Forbidden**: The user does not have permission to access the meeting details.

**Example Request:**

GET /users/{userId}/meetings/{meetingId}

**Example Response:**

{

\"id\": 123456789,

\"uuid\": \"s-DkfjlsieDkfjel\",

\"host_id\": \"u-123456789\",

\"host_email\": \"host@example.com\",

\"type\": 2,

\"topic\": \"Weekly Sync\",

\"status\": \"waiting\",

\"start_time\": \"2023-12-09T12:00:00Z\",

\"duration\": 60,

\"timezone\": \"America/New_York\",

\"created_at\": \"2023-11-01T09:00:00Z\",

\"agenda\": \"Discuss weekly objectives\",

\"join_url\": \"https://example.zoom.us/j/123456789\",

\"pmi\": \"1234567890\"

}

This structure ensures that the service meets the expectations for a seamless integration experience similar to Zoom
while leveraging advanced capabilities from Mind API to provide additional valuable meeting details and enhanced
security features.

</details>

#### Get A Meeting's SIP URI With Passcode

This section outlines the functional requirements for retrieving a SIP (Session Initiation Protocol) URI for a meeting,
including optional passcode inclusion for secure dial-in access.

<details>
**Functional Requirements for Getting a Meeting\'s SIP URI:**

**Endpoint for Getting a Meeting\'s SIP URI**:

- POST /meetings/{meetingId}/sip_dialing

**Permissions**:

- Required Scopes: **meeting:write:sip_dialing**, **meeting:write:admin:sip_dialing**

**Path Parameters**:

- **meetingId** (int64, required): The ID of the meeting for which the SIP URI is requested. This ID should be stored
  as a long format integer.

**Request Body** - SIP URI Request Object:

- **passcode** (string, optional): A user-supplied passcode that can be embedded in the SIP URI for added security
  during dialing. Zoom does not validate this passcode.

**Rate Limit**:

- Medium

**Response Details:**

The response will include the encoded SIP URI along with additional information regarding the API caller's subscription
status and the validity period of the URI.

- **Meeting\'s Encoded SIP URI Object:**

<!-- -->

- **sip_dialing** (string): The encoded SIP URI string of the meeting, which includes the meeting ID and optionally,
  the passcode and participant identifier code.

- **paid_crc_plan_participant** (boolean): Indicates whether the API caller has a valid Cloud Room Connector (CRC)
  subscription, which is necessary for certain advanced dialing features.

- **participant_identifier_code** (string): A unique identifier for the meeting participant, automatically embedded in
  the SIP URI if the API caller has a CRC plan.

- **expire_in** (integer): The number of seconds after which the encoded SIP URI will expire.

**Server Responses:**

- **200 OK**: Successfully retrieved the meeting's encoded SIP URI.

**Example Request:**

POST /meetings/{meetingId}/sip_dialing

Content-Type: application/json

{

\"passcode\": \"123456\"

}

**Example Response:**

{

\"sip_dialing\": \"sip:85746065@zoomcrc.com;pwd=123456\",

\"paid_crc_plan_participant\": true,

\"participant_identifier_code\": \"XYZ123\",

\"expire_in\": 3600

}

This functionality is crucial for organizations that integrate their meeting systems with SIP-enabled devices or
services, offering a seamless transition between online platforms and traditional teleconferencing systems. It ensures
secure and efficient access to Zoom meetings via SIP devices, enhancing connectivity and meeting accessibility.

</details>

**\* Is required new BE functionality from Mind API**

#### Get A Meeting Summary

This section outlines the functional requirements for retrieving a summary of a specific meeting. This capability allows
hosts or users with administrative permissions to access a concise review of meeting content, decisions, and next steps.

<details>
**Functional Requirements for Retrieving a Meeting Summary:**

**Endpoint for Retrieving a Meeting Summary**:

- GET /meetings/{meetingId}/meeting_summary

**Permissions**:

- Required Scopes: **meeting_summary:read:admin**, **meeting_summary:read**

**Path Parameters**:

- **meetingId** (string, required): The universally unique ID (UUID) of the meeting. Note that if the UUID begins with
  a **/** character or contains **//**, it must be double-encoded in API requests.

**Rate Limit**:

- Light

**Response Details:**

The response includes comprehensive details about the meeting, facilitating effective post-meeting reviews and
follow-ups.

**Meeting Summary Object:**

- **meeting_host_id** (string): The unique identifier of the user who hosted the meeting.

- **meeting_host_email** (email): The email address of the meeting host.

- **meeting_uuid** (string): The unique meeting ID for each instance of the meeting.

- **meeting_id** (integer): The long format unique identifier of the meeting, also known as the meeting number.

- **meeting_topic** (string): The topic or title of the meeting.

- **meeting_start_time** (date-time): The start date and time of the meeting.

- **meeting_end_time** (date-time): The end date and time of the meeting.

- **summary_start_time** (date-time): The start date and time of the meeting summary.

- **summary_end_time** (date-time): The end date and time of the meeting summary.

- **summary_created_time** (date-time): The creation date and time of the meeting summary.

- **summary_last_modified_time** (date-time): The last modified date and time of the meeting summary.

- **summary_title** (string): The title of the summary.

- **summary_overview** (string): A brief overview of the summary.

- **summary_details** (array of object): Detailed content of the summary.

  - **label** (string): Labels for different sections of the summary.

  - **summary** (string): The detailed content of each summary section.

- **next_steps** (\[string\]): Lists the next steps as outlined in the summary.

- **edited_summary** (object): Contains any user-edited details of the summary.

  - **summary_details** (string): The details of the edited summary.

  - **next_steps** (\[string\]): The edited next steps.

**Server Responses:**

- **200 OK**: Successfully retrieved the meeting summary.

**Example Response:**

{

\"meeting_host_id\": \"host123\",

\"meeting_host_email\": \"host@example.com\",

\"meeting_uuid\": \"aDYlohsHRtCd4ii1uC2+hA==\",

\"meeting_id\": 85746065,

\"meeting_topic\": \"Quarterly Business Review\",

\"meeting_start_time\": \"2023-10-05T09:00:00Z\",

\"meeting_end_time\": \"2023-10-05T11:00:00Z\",

\"summary_start_time\": \"2023-10-05T09:00:00Z\",

\"summary_end_time\": \"2023-10-05T11:00:00Z\",

\"summary_created_time\": \"2023-10-06T09:00:00Z\",

\"summary_last_modified_time\": \"2023-10-06T10:00:00Z\",

\"summary_title\": \"QBR Highlights\",

\"summary_overview\": \"Overview of key points and decisions made during the meeting.\",

\"summary_details\": \[

{

\"label\": \"Decision Points\",

\"summary\": \"The team agreed to increase the marketing budget by 15% for the next quarter.\"

}

\],

\"next_steps\": \[

\"Prepare a detailed budget proposal for the increased marketing spend.\"

\],

\"edited_summary\": {

\"summary_details\": \"Updated discussion points about marketing strategies.\",

\"next_steps\": \[\"Review the impact of the budget increase on ROI.\"\]

}

}

**Provides access to basic functionalities of AI Summarizer through an interface compatible with the Zoom Meeting API.
Access to advanced features of AI Summarizer is available through an extension to the Zoom Meeting API for AI
summarizing and assistance.**

</details>

#### Get Livestream Details (\*pro or higher plan)

This section outlines the functional requirements for obtaining the livestream configuration details of a Zoom meeting.
This capability allows hosts or administrators to access the settings necessary for broadcasting the meeting to a custom
platform.

<details>
**Functional Requirements for Retrieving Livestream Details:**

**Endpoint for Retrieving Livestream Details**:

- GET /meetings/{meetingId}/livestream

**Permissions**:

- Required Scopes: **meeting:read:admin**, **meeting:read**

**Path Parameters**:

- **meetingId** (string, required): The unique identifier of the meeting for which the livestream details are being
  retrieved.

**Rate Limit**:

- Light

**Response Details:**

The response includes the key elements needed to connect and stream the meeting to an external platform.

**Meeting\'s Livestream Configuration Object:**

- **page_url** (string): The URL of the page where the livestream can be viewed.

- **stream_key** (string): The key required to access the streaming service for broadcasting.

- **stream_url** (string): The URL to the streaming service where the meeting will be broadcast.

- **resolution** (string): The video resolution of the livestream, defined as the number of pixels in each dimension
  that can be displayed.

**Server Responses:**

- **200 OK**: Successfully retrieved the livestream configuration details.

**Example Response:**

{

\"page_url\": \"https://example.com/view\",

\"stream_key\": \"abc123xyz\",

\"stream_url\": \"https://streaming.example.com\",

\"resolution\": \"1920x1080\"

}

This functionality is essential for organizations looking to enhance the reach of their meetings by broadcasting them to
a wider audience through custom streaming platforms. It ensures that the host can manage and distribute the streaming
settings effectively, maintaining control over the visibility and accessibility of the meeting content.

</details>

**\* Is required new BE functionality from Mind API**

#### Get Past Meeting Details

This section outlines the functional requirements for retrieving information about a past Zoom meeting. This capability
allows hosts and administrators to access detailed records of completed meetings.

<details>
**Functional Requirements for Retrieving Past Meeting Details:**

**Endpoint for Retrieving Past Meeting Details**:

- GET /past_meetings/{meetingId}

**Permissions**:

- Required Scopes: **meeting:read:admin**, **meeting:read**

**Path Parameters**:

- **meetingId** (string or integer, required): The ID or universally unique ID (UUID) of the meeting. If a UUID is
  used, and it starts with a **/** or contains **//**, it must be double encoded.

**Rate Limit**:

- Light

**Response Details:**

The response will provide comprehensive details about the meeting, which can be used for reporting, analysis, and
auditing purposes.

**Past Meeting Information Object:**

- **id** (integer): The meeting ID.

- **uuid** (string): The UUID of the meeting. This is a unique identifier that changes for each meeting occurrence.

- **duration** (integer): The total duration of the meeting, in minutes.

- **start_time** (date-time): The start time of the meeting.

- **end_time** (date-time): The end time of the meeting.

- **host_id** (string): The unique identifier of the meeting host.

- **dept** (string): The department to which the meeting host belongs.

- **participants_count** (integer): The total number of participants who attended the meeting.

- **source** (string): Indicates whether the meeting was created through Zoom directly or via an API request. This
  could be the name of an OAuth app or \"Zoom\" for meetings created through the Zoom Web Portal.

- **topic** (string): The topic or title of the meeting.

- **total_minutes** (integer): The cumulative number of minutes attended by all participants.

- **type** (integer): The type of the meeting, such as scheduled, instant, recurring with no fixed time, etc.

- **user_email** (email): The email address of the meeting host.

- **user_name** (string): The display name of the meeting host.

**Server Responses:**

- **200 OK**: Successfully retrieved the past meeting details.

**Example Response:**

{

\"id\": 85746065,

\"uuid\": \"aDYlohsHRtCd4ii1uC2+hA==\",

\"duration\": 60,

\"start_time\": \"2023-08-10T15:00:00Z\",

\"end_time\": \"2023-08-10T16:00:00Z\",

\"host_id\": \"h123abc\",

\"dept\": \"Sales\",

\"participants_count\": 25,

\"source\": \"Zoom Web Portal\",

\"topic\": \"Quarterly Sales Review\",

\"total_minutes\": 1500,

\"type\": 2,

\"user_email\": \"host@example.com\",

\"user_name\": \"John Doe\"

}

This functionality is essential for organizations to maintain an archival record of their meetings, providing insights
into attendance, duration, and engagement, which are crucial for understanding the effectiveness of meetings and
planning future improvements.

</details>

**\* Is required new BE functionality from Mind API**

#### Get Past Meeting Participants

This section describes the API endpoint for retrieving participant information from past meetings, emphasizing the need
for enhanced security and data handling practices due to the sensitivity of user data involved.

<details>
**Functional Requirements:**

- **Endpoint:** **GET /past_meetings/{meetingId}/participants**

- **Path Parameters:**

  - **meetingId** (string, required): The ID or universally unique ID (UUID) of the past meeting. Note: If the UUID
    begins with a \'/\' or contains \'//\', it must be double-encoded.

- **Query-String Parameters:**

  - **page_size** (integer): Controls the number of records per API call, with a default of 30 and a maximum of 300.

  - **next_page_token** (string): Facilitates pagination for results exceeding the page size, with a 15-minute
    expiration.

**Prerequisites:**

- Paid account on a Pro or higher plan.

- Adequate permissions to access meeting data.

**Server Responses:**

- **200 OK**: Returns a detailed list of past meeting participants.

- **Errors**:

  - **404 Not Found**: No meeting found with the provided identifiers.

  - **403 Forbidden**: Insufficient permissions to access the data.

**Detailed Response Fields Explanation:**

- **next_page_token** (string): Token to retrieve the next page of results.

- **page_count** (integer): Total number of available pages.

- **page_size** (integer): Number of records per page, adhering to the specified limits.

- **total_records** (integer): Total count of records across all pages.

- **participants** (array of objects): Detailed list of participants including:

  - **id** (string): Unique identifier for each participant, consistent with Zoom User ID if logged in.

  - **name** (string): Display name of the participant.

  - **user_id** (string): Temporary unique identifier for the participant for the meeting session.

  - **registrant_id** (string): Unique identifier for registered participants; only available if specified in the
    query.

  - **user_email** (string): Email address of the participant, may be blank if not part of the host\'s account.

  - **join_time** (date-time): Timestamp when the participant joined the meeting.

  - **leave_time** (date-time): Timestamp when the participant left the meeting.

  - **duration** (integer): Duration in seconds the participant was present in the meeting.

  - **failover** (boolean): Indicates if a failover occurred affecting the participant.

  - **status** (enum): Current status of the participant, such as \'in_meeting\' or \'in_waiting_room\'.

**Enhanced Data Integration with Backend Systems:**

- Implementing data encryption for sensitive participant information.

- Ensuring all data complies with GDPR and other relevant privacy regulations.

- Utilizing backend integrations to enrich participant data for analytics and reporting purposes.

**Example Request:**

GET /past_meetings/{meetingId}/participants?page_size=30&next_page_token=IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2

**Example Response:**

{

\"next_page_token\": \"NxPgL5k4Dk6\",

\"page_count\": 10,

\"page_size\": 30,

\"total_records\": 280,

\"participants\": \[

{

\"id\": \"user-12345\",

\"name\": \"John Doe\",

\"user_id\": \"sid-54321\",

\"registrant_id\": \"reg-112233\",

\"user_email\": \"johndoe@example.com\",

\"join_time\": \"2021-05-01T09:30:00Z\",

\"leave_time\": \"2021-05-01T10:30:00Z\",

\"duration\": 3600,

\"failover\": false,

\"status\": \"in_meeting\"

}

\]

}

This detailed approach ensures that the system not only complies with data protection standards but also provides
comprehensive insights into meeting participation, enhancing overall meeting management and participant tracking.

</details>

#### List Meeting Summaries Of An Account (\*Pro or higher plan)

This section outlines the API capabilities for retrieving a comprehensive list of all meeting summaries for a specific
account, ideal for historical analysis and documentation purposes.

<details>
**Functional Requirements:**

- **Endpoint:** **GET /meetings/meeting_summaries**

- **Prerequisites:**

  - Host must have a Pro or higher plan.

  - The Meeting Summary with AI Companion feature must be enabled.

**Scopes Required:**

- **meeting_summary:read:admin**

- **meeting:read:list_summaries:admin**

**Rate Limit Considerations:**

- Categorized as Medium, balancing responsiveness with resource management.

**Query-String Parameters:**

- **page_size** (integer, optional): Number of records per page, up to 300.

- **next_page_token** (string, optional): Token for pagination, provided when available results exceed the current
  page size.

- **from** and **to** (date-time, optional): Date range for retrieving meeting summaries.

**Server Responses:**

- **200 OK**: Successfully retrieves a list of meeting summaries.

- **Errors** (if applicable):

  - 404 Not Found: No summaries found within the given criteria.

  - 403 Forbidden: Access denied due to insufficient permissions.

**Detailed Response Fields Explanation:**

- **summaries** (array of objects): Each object includes comprehensive details about each meeting\'s summary, such as:

  - **meeting_host_id** (string): ID of the meeting host.

  - **meeting_host_email** (email): Email of the host.

  - **meeting_uuid** (string): Unique identifier for each meeting instance.

  - **meeting_id** (integer): Unique identifier in long format.

  - **meeting_topic** (string): Topic of the meeting.

  - **meeting_start_time**, **meeting_end_time** (date-time): Start and end times of the meeting.

  - **summary_start_time**, **summary_end_time** (date-time): Start and end times of the summary.

  - **summary_created_time**, **summary_last_modified_time** (date-time): Creation and last modification times of
    the summary.

**Enhanced Data Integration:**

- Allows historical tracking and documentation of meetings.

- Supports detailed analysis of meeting efficiencies and host activities.

- Provides insights into meeting trends over specified periods.

**Example Request:**

GET /meetings/meeting_summaries?from=2023-10-19T07:00:00Z&to=2023-10-20T07:00:00Z&page_size=50

**Example Response:**

{

\"page_size\": 50,

\"next_page_token\": \"IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2\",

\"summaries\": \[

{

\"meeting_host_id\": \"host123\",

\"meeting_host_email\": \"host@example.com\",

\"meeting_uuid\": \"s-DkfjlsieDkfjel\",

\"meeting_id\": 123456789,

\"meeting_topic\": \"Weekly Team Update\",

\"meeting_start_time\": \"2023-10-19T12:00:00Z\",

\"meeting_end_time\": \"2023-10-19T13:00:00Z\",

\"summary_start_time\": \"2023-10-19T13:00:00Z\",

\"summary_end_time\": \"2023-10-19T13:15:00Z\",

\"summary_created_time\": \"2023-10-19T13:20:00Z\",

\"summary_last_modified_time\": \"2023-10-19T14:00:00Z\"

}

\]

}

**Provides access to basic functionalities of AI Summarizer through an interface compatible with the Zoom Meeting API.
Access to advanced features of AI Summarizer is available through an extension to the Zoom Meeting API for AI
summarizing and assistance.**

</details>

#### List Meetigns (\*Pro or higher plan)

This section details the functionality for listing scheduled meetings for a specific user within an organization,
leveraging the Zoom API\'s capabilities.

<details>
**Functional Requirements:**

- **Endpoint:** **GET /users/{userId}/meetings**

**Scopes Required:**

- **meeting:read**

- **meeting:read:admin**

**Rate Limit Considerations:**

- Classified as Medium, balancing system performance with frequent access needs.

**Path Parameters:**

- **userId** (string, required): The unique identifier for the user or \'me\' for the current authenticated user.

**Query-String Parameters:**

- **type** (enum, default: scheduled): Specifies the type of meetings to list (scheduled, live, upcoming, previous).

- **page_size** (integer, default: 30, max: 300): Specifies the number of records per API call.

- **next_page_token** (string): Paginates through large result sets.

- **from** and **to** (date): Specifies the date range for meeting retrieval.

- **timezone** (string): Specifies the timezone for the date range.

**Server Responses:**

- **200 OK**: Successfully retrieves a list of meetings.

- **Errors** (if applicable):

  - 404 Not Found: No meetings found or user not found.

  - 403 Forbidden: User does not have permission to access the meetings.

**Detailed Response Fields Explanation:**

- **page_size**, **next_page_token**, **page_count**, **page_number**, **total_records**: Pagination details.

- **meetings** (array of objects): Each object contains details about each meeting such as ID, topic, type, start
  time, duration, host details, and more.

**Enhanced Data Integration:**

- Utilizes user-specific settings to tailor the list of meetings, ensuring relevance and compliance with
  organizational policies.

- Supports rapid meeting setup by providing readily available frameworks that adhere to defined standards.

**Example Request:**

GET /users/{userId}/meetings?type=scheduled&from=2023-01-01&to=2023-01-16&timezone=America/Los_Angeles

**Example Response:**

{

\"page_size\": 30,

\"next_page_token\": \"NXtpag3Token\",

\"meetings\": \[

{

\"id\": 123456789,

\"uuid\": \"s-DkfjlsieDkfjel\",

\"host_id\": \"u-123456789\",

\"topic\": \"Weekly Sync\",

\"type\": 2,

\"start_time\": \"2023-12-09T12:00:00Z\",

\"duration\": 60,

\"timezone\": \"America/New_York\",

\"join_url\": \"https://example.zoom.us/j/123456789\",

\"agenda\": \"Discuss weekly objectives\"

}

\],

\"total_records\": 50

}

This setup ensures that users can easily access, manage, and plan for upcoming meetings, enhancing organizational
efficiency and communication.

</details>

#### List Past Meeting Instances

This section describes the functionality for retrieving a list of past instances for a given meeting using the Zoom API
integration.

<details>
**Functional Requirements:**

- **Endpoint:** **GET /past_meetings/{meetingId}/instances**

- **Scope Requirements:**

  - **meeting:read:admin**

  - **meeting:read**

**Rate Limit Considerations:**

- Classified under a Medium rate limit to balance frequent access needs with system performance.

**Path Parameters:**

- **meetingId** (int64, required): The unique identifier of the meeting whose past instances are to be listed.

**Server Responses:**

- **200 OK**: Successful retrieval of past meeting instances.

- **Errors** (if applicable):

  - 404 Not Found: No meeting found with the provided identifier.

  - 403 Forbidden: Access denied due to insufficient permissions.

**Detailed Response Fields Explanation:**

- **meetings** (array of objects): Contains details about each past meeting instance.

  - **start_time** (date-time): The start time of the meeting instance.

  - **uuid** (string): Unique identifier for each meeting instance. Note the need to double encode the UUID if it
    begins with a \'/\' or contains \'//\' for API calls.

**Enhanced Data Integration:**

- Provides detailed historical data on meeting occurrences, enabling comprehensive tracking and reporting of meeting
  activities.

**Example Request:**

GET /past_meetings/93398114182/instances

**Example Response:**

{

\"meetings\": \[

{

\"start_time\": \"2023-10-19T07:00:00Z\",

\"uuid\": \"s-AbcXyz123\"

},

{

\"start_time\": \"2023-10-20T07:00:00Z\",

\"uuid\": \"s-DefXyz456\"

}

\]

}

This functionality aids in auditing and compliance efforts by providing an accessible log of past meeting occurrences,
streamlining administrative tasks and enhancing oversight.

</details>

#### List Upcoming Meetings

This section defines the functional requirements for retrieving a list of upcoming meetings scheduled under a user\'s
Zoom account. This feature aims to provide quick access to forthcoming engagements within the next 24 hours.

<details>
**Functional Requirements for Listing Upcoming Meetings:**

- **Endpoint for Retrieving Upcoming Meetings:**

  - **GET /users/{userId}/upcoming_meetings**

- **Path Parameters:**

  - **userId** (string, required): User ID or email address. For user-level apps, pass \'me\' as the value.

**Scope Requirements:**

- Required OAuth Scopes:

  - **meeting:read**

  - **meeting:read:admin**

**Rate Limit Considerations:**

- The API falls under the Medium rate limit category, reflecting a balance between accessibility and control to
  prevent abuse.

**Query Parameters:**

- No additional query parameters are needed for basic requests as this endpoint dynamically retrieves meetings within
  the next 24 hours.

**Server Responses:**

- **200 OK**: Successful retrieval of upcoming meetings.

- **Errors** (if applicable):

  - 404 Not Found: No upcoming meetings found or invalid user ID.

  - 403 Forbidden: Insufficient permissions to access the requested resources.

**Detailed Response Fields Explanation:**

- **total_records** (integer): Total number of upcoming meetings found.

- **meetings** (array of objects): Detailed list of upcoming meetings.

  - **id** (integer): Unique identifier for the meeting.

  - **topic** (string): Topic or title of the meeting.

  - **type** (integer): Type of meeting (e.g., instant, scheduled, recurring).

  - **start_time** (date-time): Scheduled start time of the meeting.

  - **duration** (integer): Duration of the meeting in minutes.

  - **timezone** (string): Timezone in which the meeting is scheduled.

  - **created_at** (date-time): Timestamp when the meeting was created.

  - **join_url** (string): URL for participants to join the meeting.

**Enhanced Data Integration:**

- Integration with user calendars and notifications for improved management of upcoming engagements.

- Real-time updates to ensure the most current meeting information is available.

**Example Request:**

GET /users/{userId}/upcoming_meetings

**Example Response:**

{

\"total_records\": 3,

\"meetings\": \[

{

\"id\": 123456789,

\"topic\": \"Weekly Team Sync\",

\"type\": 2,

\"start_time\": \"2023-12-01T09:00:00Z\",

\"duration\": 30,

\"timezone\": \"America/New_York\",

\"created_at\": \"2023-11-20T12:34:56Z\",

\"join_url\": \"https://example.zoom.us/j/123456789\"

},

{

\"id\": 987654321,

\"topic\": \"Project Planning Session\",

\"type\": 2,

\"start_time\": \"2023-12-01T11:00:00Z\",

\"duration\": 45,

\"timezone\": \"America/New_York\",

\"created_at\": \"2023-11-21T08:33:21Z\",

\"join_url\": \"https://example.zoom.us/j/987654321\"

}

\]

}

This structure ensures that users can efficiently manage and prepare for their upcoming engagements by providing
detailed, up-to-date information on each scheduled meeting.

</details>

#### Update A Livestream

This section outlines the functional requirements necessary to update the livestream settings of a Zoom meeting,
accommodating changes to streaming destinations or qualities.

<details>
**Functional Requirements for Updating a Meeting\'s Livestream:**

- **Endpoint for Updating Livestream:**

  - **PATCH /meetings/{meetingId}/livestream**

- **Path Parameters:**

  - **meetingId** (int64, required): The unique identifier for the meeting.

**Scope Requirements:**

- Required OAuth Scopes:

  - **meeting:write**

  - **meeting:write:admin**

**Rate Limit Considerations:**

- The API falls under the \'Light\' rate limit label, thus requiring careful consideration when making frequent
  updates to ensure service stability.

**Request Body:**

- **Livestream Update Object:**

  - **page_url** (uri, required): The URL of the livestreaming page.

  - **stream_key** (string, required): The stream key or name, used to identify the stream on the streaming
    platform. Limited to 512 characters.

  - **stream_url** (string, required): The URL of the streaming server. Limited to 1024 characters.

  - **resolution** (string, optional): Desired resolution of the livestream, such as \"720p\" or \"1080p\".

**Server Responses:**

- **204 No Content**: The livestream settings were successfully updated.

- **Errors** (if applicable):

  - 404 Not Found: The specified meeting does not exist.

  - 403 Forbidden: Insufficient permissions to modify livestream settings.

**Detailed Response Fields Explanation:**

- This API does not return a response body upon success but confirms the update through the HTTP status code.

**Enhanced Data Integration:**

- Dynamic updates to livestream configurations without interrupting the ongoing meeting or requiring a restart of the
  streaming services.

**Example Request:**

PATCH /meetings/85746065/livestream

Content-Type: application/json

{

\"page_url\": \"https://example.com/live\",

\"stream_key\": \"abcd1234\",

\"stream_url\": \"rtmp://live.example.com/stream\",

\"resolution\": \"1080p\"

}

**Security and Compliance Considerations:**

- Ensure all streaming URLs and keys are protected and only accessible to authorized users to prevent unauthorized
  broadcasting.

- Monitor for any unauthorized changes to livestream settings as part of an audit trail for
</details>

#### Update A Meeting

This section outlines the functional requirements for updating the details of a scheduled Zoom meeting via the API. The
feature allows for comprehensive updates including scheduling details and meeting settings.

<details>
**Functional Requirements for Updating a Meeting:**

- **Endpoint for Updating a Meeting:**

  - **PATCH /meetings/{meetingId}**

**Scope Requirements:**

- Required OAuth Scopes:

  - **meeting:write**

  - **meeting:write:admin**

**Rate Limit Considerations:**

- The API has a daily rate limit of 100 requests per day, allowing for a maximum of 100 updates to a meeting within a
  24-hour period.

**Path Parameters:**

- **meetingId** (int64, required): The unique identifier of the meeting to be updated.

**Request Body:**

- **Meeting Update Object:**

  - **agenda** (string): Description of the meeting, up to 2000 characters.

  - **duration** (integer): Duration of the meeting in minutes.

  - **password** (string): Meeting passcode, adhering to specified character and length limits.

  - **recurrence** (object): Details for setting up recurring meetings.

  - **settings** (object): Detailed settings for the meeting such as video options, meeting features, and
    participant settings.

**Server Responses:**

- **204 No Content**: Indicates successful update of the meeting details.

- **Errors** (if applicable):

  - 404 Not Found: The specified meeting does not exist.

  - 403 Forbidden: Insufficient permissions to modify the meeting.

**Detailed Response Fields Explanation:**

- This API does not return a response body upon success but confirms the update through the HTTP status code.

**Enhanced Data Integration:**

- The ability to dynamically adjust meeting settings and schedules without creating a new meeting ID, supporting agile
  meeting management.

**Example Request:**

PATCH /meetings/85746065

Content-Type: application/json

{

\"agenda\": \"Updated team sync meeting\",

\"duration\": 45,

\"password\": \"N3wP4ss!\",

\"recurrence\": {

\"type\": 2,

\"repeat_interval\": 1,

\"weekly_days\": \"1,3,5\",

\"end_times\": 10

},

\"settings\": {

\"host_video\": true,

\"participant_video\": false,

\"mute_upon_entry\": true,

\"watermark\": true,

\"audio\": \"both\",

\"auto_recording\": \"cloud\"

}

}

**Security and Compliance Considerations:**

- Ensure that updates to meeting settings comply with organizational policies and privacy regulations.

- Monitor API usage against the rate limit to avoid service disruptions and ensure compliance with Zoom\'s API usage
policies.
</details>

#### Update Livestream Status

This section details the process for updating the status of a livestream during a Zoom meeting, utilizing the
capabilities provided by Zoom to control and manage livestreams effectively.

<details>
**Functional Requirements:**

- **Endpoint**: **PATCH /meetings/{meetingId}/livestream/status**

- **Scope Requirements**:

  - **meeting:write:admin**

  - **meeting:write**

**Rate Limit Considerations:**

- Classified under a \"Light\" rate limit, facilitating frequent updates without significant impact on API
  performance.

**Path Parameters:**

- **meetingId** (int64, required): The unique identifier of the meeting. Ensure that meeting IDs are stored as long
  format integers in databases.

**Request Body Schema:**

{

\"action\": \"start\",

\"settings\": {

\"active_speaker_name\": true,

\"display_name\": \"Weekly Team Update\",

\"layout\": \"gallery_view\",

\"close_caption\": \"burnt-in\"

}

}

**Detailed Response Fields Explanation:**

- **action**: Defines the action to be taken on the livestream (start, stop, mode).

- **settings**: Contains settings such as display options and layout preferences applicable during the livestream.

**Server Responses:**

- **204 No Content**: Successful update of the livestream status.

- **Errors** (if applicable):

  - **404 Not Found**: No livestream found with the provided meeting identifier.

  - **403 Forbidden**: Access denied due to insufficient permissions.

**Enhanced Data Integration:**

- Supports dynamic management of livestream settings during a meeting, allowing for real-time adjustments based on
  speaker activity and participant feedback.

- Enables hosts to optimize viewer experience by adjusting layouts and caption settings during the livestream.

**Example Request:**

PATCH /meetings/85746065/livestream/status

**Example Response:**

{

\"status\": \"204\",

\"message\": \"Livestream updated successfully\"

}

This approach ensures that meeting hosts can adapt livestream settings swiftly and efficiently, enhancing the overall
engagement and accessibility of meetings streamed to broader audiences.

</details>

#### Update Meeting Status

This section outlines the process for updating the status of a Zoom meeting.

<details>
**Functional Requirements:**

- **Endpoint**: **PUT /meetings/{meetingId}/status**

- **Scope Requirements**:

  - **meeting:write:admin**

  - **meeting:write**

**Rate Limit Considerations:**

- Classified under a \"Light\" rate limit, optimizing API usage without compromising performance.

**Path Parameters:**

- **meetingId** (int64, required): The unique identifier for the meeting. It is crucial to store this as a long format
  integer in databases.

**Request Body Schema:**

{

\"action\": \"end\"

}

**Detailed Response Fields Explanation:**

- **action** (enum): Specifies the desired action to update the meeting\'s status. Options include:

  - **end** - To end the meeting immediately.

  - **recover** - To recover a previously deleted meeting.

**Server Responses:**

- **204 No Content**: Indicates that the meeting status has been successfully updated.

- **Errors** (if applicable):

  - **404 Not Found**: No meeting found with the provided meeting identifier.

  - **403 Forbidden**: Access denied due to insufficient permissions.

**Enhanced Data Integration:**

- Provides mechanisms to manage meeting lifecycle effectively, ensuring that meetings can be concluded or restored as
  per administrative needs.

- Enhances control over meeting management, allowing for timely intervention in meeting operations.

**Example Request:**

PUT /meetings/85746065/status

**Example Response:**

{

\"status\": \"204\",

\"message\": \"Meeting status updated successfully\"

}

This structured approach ensures that meeting hosts and administrators can manage meeting statuses efficiently,
facilitating better control over meeting lifecycles and improving overall meeting governance.

</details>

#### Use In-meeting Controls

This section discusses the process of controlling various in-meeting features such as recording and participant
invitations through the Zoom API, which enhances meeting management and interactivity during live sessions.

<details>
**Functional Requirements:**

- **Endpoint**: **PATCH /live_meetings/{meetingId}/events**

- **Scope Requirements**:

  - **meeting:write**

  - **meeting:write:admin**

  - **meeting:master**

**Rate Limit Considerations:**

- This API is under a \"Medium\" rate limit due to its operational sensitivity and potential system impact.

**Path Parameters:**

- **meetingId** (string, required): The unique identifier for the live meeting, needing precise format handling if it
  includes special characters.

**Request Body Schema:**

{

\"method\": \"recording.start\",

\"params\": {

\"contacts\": \[

{

\"email\": \"example@example.com\",

\"invitee_name\": \"John Doe\",

\"phone_number\": \"+1234567890\"

}

\],

\"invite_options\": {

\"require_greeting\": true,

\"require_pressing_one\": true,

\"call_type\": \"sip\",

\"device_ip\": \"192.168.1.1\"

}

}

}

**Detailed Fields Explanation:**

- **method** (string): Specifies the action to control in the meeting, such as starting or stopping a recording, or
  inviting participants.

- **params** (object): Parameters tailored to the specified method, supporting detailed participant management and
  recording control.

  - **contacts** (array of objects): List of participants to be invited, with a maximum of 10.

  - **invite_options** (object): Additional settings for inviting participants, particularly through phone or room
    systems, including security features like requiring a greeting or pressing a number to connect.

**Server Responses:**

- **202 Accepted**: Indicates that the request to control the meeting has been accepted and is being processed.

**Enhanced Data Integration:**

- Facilitates real-time management of live meeting features, enhancing the host\'s ability to control the meeting
  environment and participant interaction dynamically.

- Supports compliance with organizational protocols on meeting recordings and participant engagement.

**Example Request:**

PATCH /live_meetings/93398114182/events

**Example Response:**

{

\"status\": \"Accepted\",

\"message\": \"Request to start recording accepted and is being processed.\"

}

This setup ensures that meeting hosts can effectively manage their meetings directly from their software environments,
leveraging Zoom\'s extensive capabilities to enhance meeting security, efficiency, and overall management.

</details>

#### Start Meeting Recording

This section outlines the functional requirements for the \"Start Meeting Recording\" feature within our service,
designed to emulate the cloud recording functionality as seen in Zoom\'s platform. This feature is critical for users
who need to capture meeting or webinar content for later review, compliance, training, or archival purposes.

<details>
**Functional Requirements for Starting Meeting Recording:**

**Webhook Event**: **recording.started**

- The \"Recording Started\" event is triggered each time a recording is initiated by a host or co-host during a
  meeting or webinar.

**Request Type**:

- POST

- The request is initiated through a webhook, indicating the start of a recording.

[**Prerequisites**:]{.mark}

- [Cloud recording must be enabled on the user\'s account.]{.mark}

- [Event subscriptions must be enabled for the application, with the \"Recording Started\" subscription specifically
  activated.]{.mark}

**Description of the Event Payload:**

- **event** (string): Identifies the event type, i.e., \"recording.started\".

- **event_ts** (integer): Timestamp marking when the event occurred.

- **payload** (object): Contains detailed information about the recording and associated meeting or webinar.

  - **account_id** (string): Account ID of the user who started the recording.

  - **object** (object): Detailed information about the meeting or webinar being recorded.

    - **id** (integer): ID of the meeting or webinar.

    - **uuid** (string): UUID of the specific meeting or webinar instance.

    - **host_id** (string): User ID of the host of the meeting or webinar.

    - **topic** (string): Topic of the meeting or webinar.

    - **type** (integer): Specifies the type of meeting or webinar, with values ranging from 1 (Instant Meeting)
      to 9 (Recurring Webinar with Fixed Time), including 99 for non-standard recordings.

    - **start_time** (date-time): Start time of the meeting or webinar.

    - **timezone** (string): Timezone in which the meeting or webinar is set.

    - **duration** (integer): Scheduled duration of the meeting or webinar.

    - **recording_file** (object): Contains details about the recording files, including start and end times of
      the recording.

**Server Responses:**

- **200 OK**: Successfully triggered the recording start event.

- **404 Not Found**: The specified meeting or webinar ID does not exist.

- **403 Forbidden**: The user does not have the necessary permissions or cloud recording is not enabled.

**Example Payload:**

{

\"event\": \"recording.started\",

\"event_ts\": 1609459200,

\"payload\": {

\"account_id\": \"exampleAccountId\",

\"object\": {

\"id\": 123456789,

\"uuid\": \"s6d7f8g9h0j1k2l3\",

\"host_id\": \"host123\",

\"topic\": \"Weekly Review\",

\"type\": 2,

\"start_time\": \"2023-12-31T12:00:00Z\",

\"timezone\": \"UTC\",

\"duration\": 60,

\"recording_file\": {

\"recording_start\": \"2023-12-31T12:00:00Z\",

\"recording_end\": \"2023-12-31T13:00:00Z\"

}

}

}

}

This detailed setup ensures that meeting hosts can reliably start and manage recordings, providing a critical feature
for users who rely on meeting recordings for various operational or compliance needs. The system mimics familiar
functionalities from platforms like Zoom while incorporating robust backend support for effective data management and
user experience.

</details>

#### Get Past Meeting Participants

This section describes the functional requirements for retrieving a list of all participants in a meeting, utilizing a
Zoom-like API interface externally while harnessing Mind API capabilities internally for data retrieval and management.

<details>
**Functional Requirements for Retrieving All Meeting Participants:**

**Endpoint for Retrieving All Meeting Participants**:

- GET /meetings/{meetingId}/participants

**Parameters**:

- **meetingId** (string, required): The unique identifier of the meeting from which to retrieve participant details.

**Query Parameters**:

- **page_size** (integer, optional): Specifies the number of records returned within a single API call. Defaults to
  30, with a maximum of 300.

- **next_page_token** (string, optional): Used to paginate through large result sets. This token, which expires after
  15 minutes, is provided when the available results exceed the page size.

- **Response Details:**

Participants are returned in an array, each participant object providing detailed participant information.

**Description of Response Fields:**

- next_page_token (string): A token used to fetch the next page of results if the list exceeds the page size. This
  token has a 15-minute expiration period.

- page_count (integer): The total number of pages available for the request, based on the page_size.

- page_size (integer): The number of records returned within a single API call, with a maximum limit of 300. The
  default setting is 30 records per page.

- total_records (integer): The total number of participant records available across all pages.

- participants (array of objects): A list of participant objects, each containing:

  - id (string): The unique identifier of the participant.

  - name (string): The display name of the participant.

  - user_email (string): The email address of the participant, if available.

  - join_time (date-time): The time the participant joined the meeting.

  - leave_time (date-time): The time the participant left the meeting, if applicable.

  - duration (integer): The total time, in seconds, the participant was present in the meeting.

  - status (enum): The status of the participant in the meeting, such as \'in_meeting\' or \'in_waiting_room\'.

**Use Cases:**

- **Meeting Analytics**: Provides hosts and administrators with insights into attendance and participant engagement.

- **Security Monitoring**: Ensures that only authorized participants are present in the meeting.

- **Meeting Management**: Facilitates dynamic adjustments during the meeting based on real-time participant data.

**Server Responses:**

- **200 OK**: Successfully retrieved the list of participants.

- **404 Not Found**: No meeting found with the provided ID.

- **403 Forbidden**: The requester lacks permission to view the participant details.

**Example Request:**

GET /meetings/{meetingId}/participants?page_size=30&next_page_token=IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2

**Example Response:**

{

\"next_page_token\": \"NextPageToken\",

\"page_count\": 3,

\"page_size\": 30,

\"total_records\": 85,

\"participants\": \[

{

\"id\": \"uniqueParticipantID\",

\"name\": \"Jane Doe\",

\"user_email\": \"jane.doe@example.com\",

\"join_time\": \"2023-10-05T14:00:00Z\",

\"leave_time\": \"2023-10-05T15:00:00Z\",

\"duration\": 3600,

\"status\": \"in_meeting\"

},

{

\"id\": \"uniqueParticipantID2\",

\"name\": \"John Smith\",

\"user_email\": \"john.smith@example.com\",

\"join_time\": \"2023-10-05T14:05:00Z\",

\"leave_time\": \"2023-10-05T15:15:00Z\",

\"duration\": 3900,

\"status\": \"in_meeting\"

}

\]

}

This example response demonstrates how to use pagination to manage large sets of data efficiently while providing
comprehensive details about each meeting participant. This functionality is crucial for effective meeting management and
post-meeting analysis.

</details>

### 4.2.3 Meetings API (Cloud Recording)

This section describes the functionalities provided by the Zoom Meetings API for managing cloud recordings. Our API provides
limited subset of the Zoom API excludind API for managing On Demand cloud recordings.
Detailed information about the Zoom API methods is available at: [Zoom Cloud Recording API
documentation](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#tag/Cloud-Recording). Additionally,
it outlines how we can leverage the Mind API in implementing these methods.

#### Delete A Meeting Recording File

This section outlines the process and considerations involved in deleting specific recording files from a Zoom meeting,
using the Zoom API capabilities.

<details>
**Functional Requirements:**

- **Endpoint**: **DELETE /meetings/{meetingId}/recordings/{recordingId}**

> **Scope Requirements**:

- **recording:write:admin**

- **recording:write**

**Rate Limit Considerations:**

- This API is categorized under a \"Light\" rate limit due to its infrequent and targeted use.

**Path Parameters:**

- **meetingId** (string, required): The unique identifier for the meeting or webinar from which recordings are being
  deleted. This can be the numerical meeting/webinar ID for the latest instance or the UUID for specific instances.
  Remember to double encode the UUID if it starts with a \"/\" or contains \"//\".

- **recordingId** (string, required): The unique identifier of the recording file to be deleted.

<!-- -->

- **Important Notes:**

<!-- -->

- Ensure the \"The host can delete cloud recordings\" setting is enabled under the \"Recording\" tab in the Zoom web
  portal settings.

**Query-String Parameters:**

- **action** (enum, optional): Allows the specification of the deletion action. Options include:

  - **trash** --- Moves the recording to the trash, where it is kept for a period before permanent deletion.

  - **delete** --- Permanently deletes the recording immediately.

**Server Responses:**

- **200 OK**: Successfully deleted the recording file.

- **Errors** (if applicable):

  - **404 Not Found**: No recording file found with the provided identifiers.

  - **403 Forbidden**: Access denied due to insufficient permissions.

**Detailed Response Fields Explanation:**

- The response primarily confirms the action taken on the recording file, without returning additional data.

**Enhanced Data Integration:**

- Provides a means to manage recording storage effectively, ensuring compliance with data retention policies and
  freeing up storage space.

**Example Request:**

DELETE /meetings/85746065/recordings/a2f19f96-9294-4f51-8134-6f0eea108eb2?action=delete

This structured approach to managing Zoom cloud recordings ensures that organizations can handle recorded meeting data
securely and efficiently, aligning with both operational needs and compliance requirements.

</details>

#### Delete Meeting Recordings

This section provides the necessary instructions and prerequisites for deleting all recording files from a specific Zoom
meeting using the Zoom API.

<details>
**Functional Requirements:**

- **Endpoint**: **DELETE /meetings/{meetingId}/recordings**

> **Scope Requirements**:

- **recording:write:admin**

- **recording:write**

**Rate Limit Considerations:**

- Categorized under a \"Light\" rate limit label due to minimal data transfer and infrequent operational necessity.

**Path Parameters:**

- **meetingId** (string, required): The unique identifier for the meeting or webinar. You can use the numerical ID for
  the most recent instance or the UUID for specific instances. Note that UUIDs starting with \"/\" or containing
  \"//\" must be double encoded.

<!-- -->

- **Query-String Parameters:**

<!-- -->

- **action** (enum, optional): Specifies the deletion action to be performed on the recordings:

  - **trash** --- Moves recordings to the trash, where they remain temporarily before permanent deletion.

  - **delete** --- Immediately deletes the recordings permanently.

**Server Responses:**

- **200 OK**: Indicates successful deletion of the recordings.

- **Errors** (if applicable):

  - **404 Not Found**: No recordings found for the specified meeting ID or UUID.

  - **403 Forbidden**: Insufficient permissions to delete recordings.

**Detailed Response Fields Explanation:**

- Typically, the response will confirm the deletion action without returning specific data about the deleted
  recordings.

**Enhanced Data Integration:**

- Allows organizations to manage their recording archives effectively, ensuring that storage space is optimized and
  that recordings are handled in accordance with data retention policies.

**Example Request:**

DELETE /meetings/atsXxhSEQWit9t+U02HXNQ==/recordings?action=delete

This API function ensures that organizations can maintain control over their digital meeting spaces, managing recording
storage efficiently and complying with internal or regulatory data management policies.

</details>

#### Get Meeting Recording Settings

This section describes the process to retrieve the Cloud Recording settings for a specific Zoom meeting or webinar using
the Zoom API, which helps in managing the accessibility and security of recorded meetings.

<details>
**Functional Requirements:**

- **Endpoint**: **GET /meetings/{meetingId}/recordings/settings**

> **Scope Requirements**:

- **recording:read:admin**

- **recording:read**

**Rate Limit Considerations:**

- Classified under a \"Light\" rate limit label, indicating low impact on the API\'s performance due to the simplicity
  of the data retrieval operation.

**Path Parameters:**

- **meetingId** (string, required): The unique identifier of the meeting or webinar, either as a meeting ID or UUID.
  For UUIDs that start with \'/\' or contain \'//\' double encoding is necessary.

**Server Responses:**

- **200 OK**: Successful retrieval of recording settings.

- **Errors** (if applicable):

  - **404 Not Found**: No settings found for the provided identifier.

  - **403 Forbidden**: Access denied due to insufficient permissions.

**Detailed Response Fields Explanation:**

- **approval_type** (integer): Specifies the registration approval type for viewing the recording.

- **authentication_domains** (string): Domains that are allowed to authenticate to view the recording.

- **authentication_option** (string): Specifies additional authentication options.

- **on_demand** (boolean): Indicates whether registration is required to view the recording. On-demand recording mode is
  not supported. The value is always 'false'.

- **password** (string): Enables passcode protection for viewing the recording, adhering to account-level security
  settings.

- **recording_authentication** (boolean): Restricts recording access to authenticated users.

- **send_email_to_host** (boolean): Enables sending an email to the host when someone registers to view the recording.

- **share_recording** (enum): Controls the sharing level of the recording.

- **show_social_share_buttons** (boolean): Displays social share buttons on the recording registration page.

- **topic** (string): The title or topic of the recording.

- **viewer_download** (boolean): Allows or disallows viewers from downloading the recording.

**Enhanced Data Integration:**

- Provides administrators and meeting hosts with detailed controls over recording accessibility, enhancing security
  and compliance with organizational policies.

**Example Request:**

GET /meetings/atsXxhSEQWit9t+U02HXNQ==/recordings/settings

**Example Response:**

{

\"approval_type\": 1,

\"authentication_domains\": \"example.com\",

\"authentication_option\": \"secure\",

\"on_demand\": true,

\"password\": \"Secure123!\",

\"recording_authentication\": true,

\"send_email_to_host\": true,

\"share_recording\": \"internally\",

\"show_social_share_buttons\": true,

\"topic\": \"Annual Meeting 2023\",

\"viewer_download\": false

}

This structured approach ensures that organizations can control and manage how their meeting recordings are accessed and
viewed, aligning with privacy and security regulations.

</details>

#### Get Meeting Recording

This section explains how to retrieve all recordings for a specific meeting using Zoom\'s API, useful for
accessing post-meeting reviews and archives.

<details>
**Functional Requirements:**

- **Endpoint**: **GET /meetings/{meetingId}/recordings**

> **Scope Requirements**:

- **recording:read**

- **phone_recording:read:admin**

**Rate Limit Considerations:**

- Classified under a \"Light\" rate limit, ensuring efficient access to recording files without significant system
  load.

**Path Parameters:**

- **meetingId** (string, required): Identifier for the meeting or webinar. Use the meeting ID or UUID. For UUIDs that
  start with \'/\' or contain \'//\', ensure they are double-encoded.

**Query-String Parameters:**

- **include_fields** (string, optional): Include this to specify additional fields like **download_access_token**,
  facilitating the direct download of recordings.

- **ttl** (integer, optional): Time to live for **download_access_token**, specifying how long the token remains
  valid.

**Server Responses:**

- **200 OK**: Successful retrieval of meeting recordings.

- **Errors** (if applicable):

  - **404 Not Found**: No recordings found for the provided identifier.

  - **403 Forbidden**: Access denied due to insufficient permissions.

**Detailed Response Fields Explanation:**

- **recording_files** (array of objects): List of individual recording files, including video, audio, and additional
  data files like chat logs.

  - **download_url** (string): URL to download the recording. Requires a valid OAuth token or download token in the
    request header.

  - **file_type** (enum): Type of recording file, such as MP4 for video, M4A for audio, etc.

**Enhanced Data Integration:**

- Provides comprehensive access to all recorded components of a meeting, including video, audio, and text logs, aiding
  in content review and compliance checks.

**Example Request:**

GET /meetings/atsXxhSEQWit9t+U02HXNQ==/recordings

**Example Response:**

{

\"account_id\": \"d1234567890\",

\"duration\": 60,

\"host_id\": \"h1234567890\",

\"id\": 123456789,

\"recording_count\": 3,

\"start_time\": \"2023-10-10T14:00:00Z\",

\"topic\": \"Weekly Team Meeting\",

\"total_size\": 500000000,

\"uuid\": \"s-AbcXyz123\",

\"recording_files\": \[

{

\"file_type\": \"MP4\",

\"download_url\": \"https://zoom.us/rec/download/xxxx\"

}

\]

}

This setup ensures that meeting hosts and participants can access recorded sessions for review, compliance, or archival
purposes efficiently and securely.

</details>

#### List All Recordings

This section describes the API endpoint to list all cloud recordings for a specific Zoom user. This functionality
supports user-level apps and direct user requests with appropriate authentication.

<details>
**Functional Requirements:**

- **Endpoint**: **GET /users/{userId}/recordings**

- **Scope Requirements**:

  - **recording:read:admin**

  - **recording:read**

**Rate Limit Considerations:**

- Classified under a **Medium** rate limit label to balance system performance with data retrieval needs.

**Path Parameters:**

- **userId** (string, required): The user\'s ID or email address. For user-level apps, the **me** value can be passed
  instead of the actual userId.

**Query-String Parameters:**

- **page_size** (integer, optional): Specifies the number of records per API call, with a maximum of 300.

- **next_page_token** (string, optional): A token to paginate through large sets of results, with a 15-minute
  expiration.

- **from** (date, optional): The start date for filtering recording data. Defaults to the current date if not
  specified.

- **to** (date, optional): The end date for filtering recording data.

- **trash** (boolean, optional): If set to true, retrieves recordings from the trash.

<!-- -->

- **Server Responses:**

<!-- -->

- **200 OK**: Successfully retrieves the list of recordings.

- **Errors** (if applicable):

  - **404 Not Found**: No recordings found with the provided user identifier.

  - **403 Forbidden**: Access denied due to insufficient permissions.

<!-- -->

- **Detailed Response Fields Explanation:**

<!-- -->

- **from** (date): The start date from which recordings are listed.

- **to** (date): The end date until which recordings are listed.

- **recordings** (array of objects): Contains detailed information about each recording, including file types, sizes,
  download URLs, and more.

- **total_records** (integer): The total number of records available across all pages.

<!-- -->

- **Enhanced Data Integration:**

- Provides comprehensive access to recording details, supporting better management and retrieval of user data.

- Facilitates detailed analysis and monitoring of recording usage and access patterns.

**Example Request:**

GET /users/{userId}/recordings

**Example Response:**

{

\"from\": \"2023-01-01\",

\"to\": \"2023-01-31\",

\"recordings\": \[

{

\"id\": 123456789,

\"topic\": \"Monthly Review\",

\"type\": 2,

\"start_time\": \"2023-01-10T15:00:00Z\",

\"duration\": 60,

\"total_size\": 102400,

\"recording_files\": \[

{

\"id\": \"abcd1234\",

\"file_type\": \"MP4\",

\"download_url\": \"https://zoom.us/rec/download/abcd1234\",

\"status\": \"completed\"

}

\]

}

\]

}

This structured approach ensures a comprehensive retrieval of cloud recordings, enhancing organizational capabilities
for managing and analyzing recorded content effectively.

</details>

#### Update Meeting Recording Settings

This section provides a structured approach to updating Cloud Recording settings for a specific meeting or webinar using
the Zoom API. These settings adjust aspects like access controls and sharing preferences, ensuring recordings meet
organizational and user requirements.

<details>
**Functional Requirements:**

- **Endpoint**: **PATCH /meetings/{meetingId}/recordings/settings**

- **Scope Requirements**:

  - **recording:write**

  - **recording:write:admin**

**Rate Limit Considerations:**

- Classified under a **Light** rate limit, optimizing the API\'s performance for configuration adjustments.

**Path Parameters:**

- **meetingId** (string, required): Unique identifier of the meeting or webinar. If using a UUID, ensure it is
  double-encoded if it starts with \'/\' or contains \'//\' to avoid request errors.

**Request Body:**

- **Fields**:

  - **approval_type** (integer): Configures the registration approval process for viewing the recording.

  - **authentication_domains** (string): Specifies the domains allowed for authentication.

  - **authentication_option** (string): Details the authentication options employed.

  - **on_demand** (boolean): Determines if registration is necessary to access the recording. **NOT SUPPORTED**

  - **password** (string): Sets a passcode for recording access, adhering to any specified strength requirements.

  - **recording_authentication** (boolean): Restricts viewing to authenticated users only.

  - **send_email_to_host** (boolean): Enables notifications to the host when someone registers to view the
    recording.

  - **share_recording** (enum): Defines the sharing scope of the recording.

  - **show_social_share_buttons** (boolean): Displays social sharing options on the registration page.

  - **topic** (string): Names the recording for identification.

  - **viewer_download** (boolean): Allows or prevents viewers from downloading the recording.

**Server Responses:**

- **204 No Content**: Successfully updated the recording settings.

- **Errors** (if applicable):

  - **404 Not Found**: No recordings found with the provided identifier.

  - **403 Forbidden**: Access denied due to insufficient permissions or inappropriate scope settings.

**Detailed Response Fields Explanation:**

- The API does not return any data fields in response to this request, as the focus is solely on updating settings
  rather than retrieving information.

**Enhanced Data Integration:**

- Enables dynamic management of recording access and distribution settings, aligning with compliance and governance
  frameworks.

- Supports user experience customization by allowing for controlled access and notifications related to recording
  viewership.

**Example Request:**

PATCH /meetings/{meetingId}/recordings/settings

{

\"approval_type\": 1,

\"password\": \"Pass123!\",

\"on_demand\": true,

\"send_email_to_host\": true,

\"viewer_download\": false,

\"share_recording\": \"internally\"

}

This API functionality offers robust controls over recording settings, ensuring that users can manage access and
distribution effectively to meet diverse needs in organizational and individual contexts.

</details>

### 4.2.4 QSS API

This section describes the requests related to the Quality of Service Subscription (QSS) API. This API provides methods
for monitoring and analyzing network traffic in real-time for users, hosts, and participants of meetings, webinars, and
phone calls. The QSS API helps in proactively troubleshooting and identifying quality of service (QoS) issues.

Our API is similar to the Zoom QSS API and uses similar methods and data models. Detailed information about the Zoom QSS
API methods is available at: [Zoom Quality of Service Subscription (QSS)
API](https://developers.zoom.us/docs/api/rest/qss-api/). Additionally, it outlines how we can leverage the Mind API in
implementing these methods.

#### List meeting participants QoS Summary

This section describes the requests related to the Quality of Service (QoS) Summary API for meeting participants. This
API provides methods for returning a list of meeting participants from past meetings and summarizing their quality of
service received during the meeting. The data returned indicates the connection quality for sending or receiving video,
audio, and shared content.

Our API is similar to the Zoom QoS API and uses similar methods and data models. Detailed information about the Zoom QoS
API methods is available at: [Zoom Quality of Service Subscription (QSS)
API](https://developers.zoom.us/docs/api/rest/qss-api/). Additionally, it outlines how we can leverage the Mind API in
implementing these methods.

<details>
**Endpoint**

**GET /metrics/meetings/{meetingId}/participants/qos_summary**

**Permissions**

**Required Scopes:** dashboard_meetings:read:admin, dashboard:read:admin

**Granular Scopes:** dashboard:read:list_meeting_participants_qos:admin

**Path Parameters**

- **meetingId** (string, required): The meeting\'s ID or universally unique ID (UUID). If a meeting UUID begins with a
  **/** character or contains **//**, it must be double-encoded before making an API request.

**Query-String Parameters**

- **page_size** (integer, optional, default: 1, max: 10): The number of items returned per page.

- **next_page_token** (string, optional): Use the next page token to paginate through large result sets. A next page
  token is returned whenever the set of the available result list exceeds the page size. This token\'s expiration
  period is 15 minutes.

**Request Body**

No request body required.

**Response Details**

The response includes the following fields:

- **next_page_token** (string): Use the next page token to paginate through large result sets. A next page token is
  returned whenever the set of the available result list exceeds the page size. This token\'s expiration period is 15
  minutes.

- **page_size** (integer): The number of records returned within a single API call. Constraints: Max 300, Default: 30.

- **participants** (array of objects): Information about the participants and the summary of their quality of service
  (QoS).

  - **id** (string): The participant\'s universally unique ID. This value is the same as the participant\'s user ID
    if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging
    into Zoom, this returns an empty value.

  - **participant_id** (string): The participant\'s ID. This value is assigned to a participant upon joining a
    meeting and is only valid for the meeting\'s duration.

  - **user_name** (string): The participant\'s display name.

  - **email** (email): The participant\'s email address. If the participant is not part of the host\'s account, this
    returns an empty string value, with some exceptions.

  - **qos** (array of objects): The summary of the participant\'s quality of service information.

    - **type** (enum): The type of QoS metrics, from the point of view of the client. Allowed values: audio_input,
      audio_output, video_input, video_output, as_input, as_output, cpu_usage, audio_device_from_crc,
      audio_device_to_crc, video_device_from_crc, video_device_to_crc, as_device_from_crc, as_device_to_crc,
      audio_device_from_rwg, audio_device_to_rwg, video_device_from_rwg, video_device_to_rwg, as_device_from_rwg,
      as_device_to_rwg.

    - **details** (object): The detail of Participant QoS Summary.

      - **min_bitrate** (string): The minimum amount of bitrate, in kbps.

      - **avg_bitrate** (string): The average amount of bitrate, in kbps.

      - **max_bitrate** (string): The maximum amount of bitrate, in kbps.

      - **min_latency** (string): The minimum amount of latency, in milliseconds.

      - **avg_latency** (string): The average amount of latency, in milliseconds.

      - **max_latency** (string): The maximum amount of latency, in milliseconds.

      - **min_jitter** (string): The minimum amount of jitter, in milliseconds.

      - **avg_jitter** (string): The average amount of jitter, in milliseconds.

      - **max_jitter** (string): The maximum amount of jitter, in milliseconds.

      - **min_loss** (string): The minimum amount of packet loss.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that the video camera can display.

      - **min_frame_rate** (string): The minimum amount of frame rate, in fps.

      - **avg_frame_rate** (string): The average amount of frame rate, in fps.

      - **max_frame_rate** (string): The maximum amount of frame rate, in fps.

      - **zoom_min_cpu_usage** (string): Zoom\'s minimum CPU usage.

      - **zoom_avg_cpu_usage** (string): Zoom\'s average CPU usage.

      - **zoom_max_cpu_usage** (string): Zoom\'s maximum CPU usage.

      - **system_max_cpu_usage** (string): The system\'s maximum CPU usage.

**Server Responses**

- **200 OK**: Meeting QoS summary returned. Only available for paid accounts that have enabled the dashboard feature.

**Example Request**

GET
/metrics/meetings/{meetingId}/participants/qos_summary?page_size=10&next_page_token=IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2

**Example Response**

{

\"next_page_token\": \"IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2\",

\"page_size\": 10,

\"participants\": \[

{

\"id\": \"user123\",

\"participant_id\": \"participant123\",

\"user_name\": \"John Doe\",

\"email\": \"john.doe@example.com\",

\"qos\": \[

{

\"type\": \"audio_input\",

\"details\": {

\"min_bitrate\": \"50\",

\"avg_bitrate\": \"100\",

\"max_bitrate\": \"150\",

\"min_latency\": \"20\",

\"avg_latency\": \"30\",

\"max_latency\": \"40\",

\"min_jitter\": \"5\",

\"avg_jitter\": \"10\",

\"max_jitter\": \"15\",

\"min_loss\": \"0.1\",

\"avg_loss\": \"0.2\",

\"max_loss\": \"0.3\",

\"resolution\": \"1920x1080\",

\"min_frame_rate\": \"15\",

\"avg_frame_rate\": \"30\",

\"max_frame_rate\": \"60\",

\"zoom_min_cpu_usage\": \"5\",

\"zoom_avg_cpu_usage\": \"10\",

\"zoom_max_cpu_usage\": \"20\",

\"system_max_cpu_usage\": \"50\"

}

}

\]

}

\]

}

</details>

#### List session users QoS Summary

This section describes the requests related to the Quality of Service (QoS) Summary API for session users. This API
provides methods for returning a list of users from past sessions and summarizing their quality of service received
during the session. The data returned indicates the connection quality for sending and receiving video, audio, and
shared content.

<details>
Our API is similar to the Zoom QoS API and uses similar methods and data models. Detailed information about the Zoom QoS
API methods is available at: [Zoom Quality of Service Subscription (QSS)
API](https://developers.zoom.us/docs/api/rest/qss-api/). Additionally, it outlines how we can leverage the Mind API in
implementing these methods.

**Endpoint**

GET /videosdk/sessions/{sessionId}/users/qos_summary

**Permissions**

**Required Scopes:** dashboard_meetings:read:admin

**Path Parameters**

- **sessionId** (string, required): The session\'s ID. If the ID begins with a **/** character or contains **//**
  characters, it must be double-encoded before making an API request.

**Query-String Parameters**

- **page_size** (integer, optional, default: 1, max: 10): The number of items returned per page.

- **next_page_token** (string, optional): The next page token is used to paginate through large result sets. A next
  page token will be returned whenever the set of available results exceeds the current page size. The expiration
  period for this token is 15 minutes.

**Request Body**

No request body required.

**Response Details**

The response includes the following fields:

- **next_page_token** (string): The next page token is used to paginate through large result sets. A next page token
  will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15
  minutes.

- **page_size** (integer): The number of records returned within a single API call. Constraints: Max 300, Default: 30.

- **users** (array of objects): Information about the users and the summary of their quality of service (QoS).

  - **id** (string): The user\'s universally unique ID. This value is the same as the user\'s user ID if the user
    joins the session by logging into Zoom. If the user joins the session without logging into Zoom, this returns an
    empty value.

  - **name** (string): The user\'s display name.

  - **user_key** (string): Another identifier for the user. Can be a number or characters, maximum length of 15
    characters. Constraints: Max 15 chars.

  - **qos** (array of objects): The summary of the user\'s quality of service information.

    - **type** (enum): Type of the QoS summary. Allowed values: audio_input, audio_output, video_input,
      video_output, as_input, as_output, cpu_usage, audio_device_from_crc, audio_device_to_crc,
      video_device_from_crc, video_device_to_crc, as_device_from_crc, as_device_to_crc.

    - **details** (object): The user\'s QoS summary details.

      - **min_bitrate** (string): The minimum amount of bitrate, in kbps.

      - **avg_bitrate** (string): The average amount of bitrate, in kbps.

      - **max_bitrate** (string): The maximum amount of bitrate, in kbps.

      - **min_latency** (string): The minimum amount of latency, in milliseconds.

      - **avg_latency** (string): The average amount of latency, in milliseconds.

      - **max_latency** (string): The maximum amount of latency, in milliseconds.

      - **min_jitter** (string): The minimum amount of jitter, in milliseconds.

      - **avg_jitter** (string): The average amount of jitter, in milliseconds.

      - **max_jitter** (string): The maximum amount of jitter, in milliseconds.

      - **min_loss** (string): The minimum amount of packet loss.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that the video camera can display.

      - **min_frame_rate** (string): The minimum amount of frame rate, in fps.

      - **avg_frame_rate** (string): The average amount of frame rate, in fps.

      - **max_frame_rate** (string): The maximum amount of frame rate, in fps.

      - **zoom_min_cpu_usage** (string): Zoom\'s minimum CPU usage.

      - **zoom_avg_cpu_usage** (string): Zoom\'s average CPU usage.

      - **zoom_max_cpu_usage** (string): Zoom\'s maximum CPU usage.

      - **system_max_cpu_usage** (string): The system\'s maximum CPU usage.

**Server Responses**

- **200 OK**: Session users QoS summary returned.

**Example Request**

GET /videosdk/sessions/{sessionId}/users/qos_summary?page_size=10&next_page_token=IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2

**Example Response**

{

\"next_page_token\": \"IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2\",

\"page_size\": 10,

\"users\": \[

{

\"id\": \"user123\",

\"name\": \"Jane Doe\",

\"user_key\": \"jdoe123\",

\"qos\": \[

{

\"type\": \"audio_input\",

\"details\": {

\"min_bitrate\": \"50\",

\"avg_bitrate\": \"100\",

\"max_bitrate\": \"150\",

\"min_latency\": \"20\",

\"avg_latency\": \"30\",

\"max_latency\": \"40\",

\"min_jitter\": \"5\",

\"avg_jitter\": \"10\",

\"max_jitter\": \"15\",

\"min_loss\": \"0.1\",

\"avg_loss\": \"0.2\",

\"max_loss\": \"0.3\",

\"resolution\": \"1920x1080\",

\"min_frame_rate\": \"15\",

\"avg_frame_rate\": \"30\",

\"max_frame_rate\": \"60\",

\"zoom_min_cpu_usage\": \"5\",

\"zoom_avg_cpu_usage\": \"10\",

\"zoom_max_cpu_usage\": \"20\",

\"system_max_cpu_usage\": \"50\"

}

}

\]

}

\]

}

</details>

### 4.2.5 Account API

This section describes the requests related to the account management API. This API provides methods for managing user
accounts, including creating, updating, and deleting accounts, as well as retrieving account details. Our API is similar
to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API methods is available
at: [Zoom Account API](https://developers.zoom.us/docs/api/rest/reference/account/methods/#overview). Additionally, it
outlines how we can leverage the Mind API in implementing these methods.

### 4.2.6 User API

This section describes the requests related to the user management API. This API provides methods for managing user
details, including creating, updating, and deleting users, as well as retrieving user information. Our API is similar to
the Zoom API and uses similar methods and data models. Detailed information about the Zoom API methods is available at:
[Zoom User API](https://developers.zoom.us/docs/api/rest/reference/user/methods/#overview). Additionally, it outlines
how we can leverage the Mind API in implementing these methods.

### 4.2.7 Video SDK

This section describes the requests related to the Video SDK. The SDK provides methods for integrating video
conferencing capabilities into custom applications, including joining and managing meetings, handling video streams, and
more. Our SDK is similar to the Zoom Video SDK and uses similar methods and data models. Detailed information about the
Zoom SDK methods is available at: [Zoom Video
SDK](https://developers.zoom.us/docs/api/rest/reference/video-sdk/methods/#overview). Additionally, it outlines how we
can leverage the Mind API in implementing these methods.

#### Delete session\'s recording file

This section describes the request related to deleting a specific recording file from a session. This API allows the
deletion of a recording file associated with a session. Note: To use this API, you must enable the \"The host can delete
cloud recordings\" setting.

<details>
Our API is similar to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API
methods is available at: [Zoom API Documentation](https://developers.zoom.us/docs/api/). Additionally, it outlines how
we can leverage the Mind API in implementing these methods.

**Endpoint**

DELETE /videosdk/sessions/{sessionId}/recordings/{recordingId}

**Permissions**

**Rate Limit Label:** Light

**Path Parameters**

- **sessionId** (string, required): The session\'s ID. If the ID begins with a **/** character or contains **//**
  characters, it must be double-encoded before making an API request.

  - Examples: **KkMHZ4y8QhSUWAHi5sWvfg==**

- **recordingId** (string, required): The recording ID.

  - Examples: **46cf7349-0b72-4ade-a8a2-a51dae38a69a**

**Query-String Parameters**

- **action** (enum, optional, default: **trash**): The recording delete actions:

  - Allowed values: **trash**, **delete**

  - Examples: **trash**

**Request Body**

No request body required.

**Response Details**

- **200 OK**: The recording file was successfully deleted.

- **403 Forbidden**: You do not have the right permissions.

**Server Responses**

- **200 OK**: Successfully deleted the recording file.

- **403 Forbidden**: You do not have the right permissions.

**Example Request**

DELETE /videosdk/sessions/{sessionId}/recordings/{recordingId}?action=trash

**Example Response**

{

\"code\": 200,

\"message\": \"The recording file was successfully deleted.\"

}

</details>

#### Delete session\'s recordings

This section describes the request related to deleting all recording files of a session. This API allows the deletion of
all recording files associated with a session. Note: To use this API, Cloud Recording should be enabled on the user\'s
account.

<details>
Our API is similar to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API
methods is available at: [Zoom API Documentation](https://developers.zoom.us/docs/api/). Additionally, it outlines how
we can leverage the Mind API in implementing these methods.

**Endpoint**

DELETE /videosdk/sessions/{sessionId}/recordings

**Permissions**

**Rate Limit Label:** Light

**Path Parameters**

- **sessionId** (string, required): The session\'s ID. If the ID begins with a **/** character or contains **//**
  characters, it must be double-encoded before making an API request.

  - Examples: **KkMHZ4y8QhSUWAHi5sWvfg==**

**Query-String Parameters**

- **action** (enum, optional, default: **trash**): The recording delete actions:

  - Allowed values: **trash**, **delete**

  - Examples: **trash**

**Request Body**

No request body required.

**Response Details**

- **200 OK**: All recording files were successfully deleted.

- **403 Forbidden**: You do not have the right permissions.

**Server Responses**

- **200 OK**: Successfully deleted all recording files.

- **403 Forbidden**: You do not have the right permissions.

**Example Request**

DELETE /videosdk/sessions/{sessionId}/recordings?action=trash

**Example Response**

{

\"code\": 200,

\"message\": \"All recording files were successfully deleted.\"

}

</details>

#### List recordings of an account

This section describes the request related to listing Video SDK Cloud Recordings available on an account. This API
allows the retrieval of a list of cloud recordings associated with an account.

<details>
Our API is similar to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API
methods is available at: [Zoom API Documentation](https://developers.zoom.us/docs/api/). Additionally, it outlines how
we can leverage the Mind API in implementing these methods.

**Endpoint**

GET /videosdk/recordings

**Permissions**

**Rate Limit Label:** Medium

**Query-String Parameters**

- **page_size** (integer, optional, default: 30, max: 300): The number of records returned within a single API call.

  - Examples: **10**

- **next_page_token** (string, optional): The next page token is used to paginate through large result sets. A next
  page token will be returned whenever the set of available results exceeds the current page size. The expiration
  period for this token is 15 minutes.

  - Examples: **Usse957pzxvmYwlmCZ50a6CNXFrhztxuj82**

- **trash** (boolean, optional, default: false): Query trash. If true, lists recordings from trash. If false, does not
  list recordings from the trash.

  - Examples: **true**

- **trash_type** (string, optional, default: **session_recordings**): The type of cloud recording that you would like
  to retrieve from the trash.

  - Allowed values: **session_recordings**, **recording_file**

  - Examples: **session_recordings**

- **from** (date, optional): The start date in \'yyyy-mm-dd\' UTC format for the date range for which you would like
  to retrieve recordings. The maximum range can be a month.

  - Examples: **2021-10-11**

- **to** (date, optional): The end date in \'yyyy-mm-dd\' UTC format.

  - Examples: **2021-11-11**

**Request Body**

No request body required.

**Response Details**

The response includes the following fields:

- **session_id** (string): Unique Session Identifier. Each instance of the session will have its own session_id.

- **session_name** (string): Session name.

- **start_time** (date-time): The time at which the session started.

- **duration** (integer): Session duration.

- **total_size** (integer): The total file size of the recording. This includes the recording_files and
  participant_audio_files files.

- **recording_count** (integer): Number of recording files returned in the response of this API call. This includes
  the recording_files and participant_audio_files files.

  - **recording_files** (array of objects): List of recording files.

    - **id** (string): The recording file ID.

    - **recording_start** (string): The recording start time.

    - **recording_end** (string): The recording end time.

    - **file_type** (string): The recording file type. Allowed values: **MP4**, **M4A**, **TIMELINE**,
      **TRANSCRIPT**, **CHAT**, **CC**, **CSV**.

    - **file_size** (number): The recording file size.

    - **download_url** (string): The URL to download the recording.

    - **status** (enum): The recording status. Allowed values: **completed**.

    - **deleted_time** (string): The time at which the recording was deleted. Returned in the response only for
      trash query.

    - **recording_type** (string): The recording type. Allowed values: **shared_screen_with_speaker_view(CC)**,
      **shared_screen_with_speaker_view**, **shared_screen_with_gallery_view**, **speaker_view**,
      **gallery_view**, **shared_screen**, **audio_only**, **audio_transcript**, **chat_file**,
      **active_speaker**, **poll**, **timeline**, **closed_caption**, **local_transcript**,
      **original_transcript**.

  - **participant_video_files** (array of objects): List of recording files for each participant. The API only
    returns this response when the \"Record a separate audio file of each participant\" setting is enabled.

    - **id** (string): The recording file\'s unique ID.

    - **recording_start** (date-time): The recording file\'s start time.

    - **recording_end** (date-time): The recording file\'s end time.

    - **file_name** (string): The recording file\'s name.

    - **file_type** (string): The recording file\'s format. Allowed values: **MP4**, **M4A**, **TIMELINE**,
      **TRANSCRIPT**, **CHAT**, **CC**, **CSV**.

    - **file_extension** (string): The archived file\'s extension.

    - **file_size** (number): The recording file\'s size, in bytes.

    - **download_url** (string): The URL to download the recording.

    - **recording_type** (enum): The type of recording file. Allowed values: **individual_user**,
      **individual_shared_screen**.

    - **status** (enum): The recording file\'s status. Allowed values: **completed**.

    - **user_id** (string): The participant\'s session user ID.

    - **user_key** (string): The participant\'s SDK identifier. This value can be alphanumeric, up to a maximum
      length of 35 characters.

**Server Responses**

- **200 OK**: List of recording objects returned.

**Example Request**

GET
/videosdk/recordings?page_size=10&next_page_token=Usse957pzxvmYwlmCZ50a6CNXFrhztxuj82&trash=true&trash_type=session_recordings&from=2021-10-11&to=2021-11-11

**Example Response**

{

\"session_id\": \"KkMHZ4y8QhSUWAHi5sWvfg==\",

\"session_name\": \"Project Meeting\",

\"start_time\": \"2021-10-11T10:00:00Z\",

\"duration\": 120,

\"total_size\": 2048,

\"recording_count\": 2,

\"recording_files\": \[

{

\"id\": \"46cf7349-0b72-4ade-a8a2-a51dae38a69a\",

\"recording_start\": \"2021-10-11T10:00:00Z\",

\"recording_end\": \"2021-10-11T12:00:00Z\",

\"file_type\": \"MP4\",

\"file_size\": 1024,

\"download_url\": \"https://example.com/download/46cf7349-0b72-4ade-a8a2-a51dae38a69a\",

\"status\": \"completed\",

\"recording_type\": \"shared_screen_with_speaker_view\"

},

{

\"id\": \"67gh8491-2a32-4abc-b8b2-b51cde39a69b\",

\"recording_start\": \"2021-10-11T10:00:00Z\",

\"recording_end\": \"2021-10-11T12:00:00Z\",

\"file_type\": \"M4A\",

\"file_size\": 1024,

\"download_url\": \"https://example.com/download/67gh8491-2a32-4abc-b8b2-b51cde39a69b\",

\"status\": \"completed\",

\"recording_type\": \"audio_only\"

}

\],

\"participant_video_files\": \[

{

\"id\": \"89jk8512-3b43-5cde-d9c3-c62def40b70c\",

\"recording_start\": \"2021-10-11T10:00:00Z\",

\"recording_end\": \"2021-10-11T12:00:00Z\",

\"file_name\": \"Jane Doe\",

\"file_type\": \"MP4\",

\"file_extension\": \".mp4\",

\"file_size\": 512,

\"download_url\": \"https://example.com/download/89jk8512-3b43-5cde-d9c3-c62def40b70c\",

\"recording_type\": \"individual_user\",

\"status\": \"completed\",

\"user_id\": \"user123\",

\"user_key\": \"jdoe123\"

}

\]

}

</details>

#### List session's recordings

This section describes the request related to getting all the recordings from a session instance. This API allows the
retrieval of all recording files associated with a session. The recording files can be downloaded via the
**download_url** property listed in the response.

<details>
Our API is similar to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API
methods is available at: [Zoom API Documentation](https://developers.zoom.us/docs/api/). Additionally, it outlines how
we can leverage the Mind API in implementing these methods.

**Endpoint**

GET /videosdk/sessions/{sessionId}/recordings

**Permissions**

**Rate Limit Label:** Light

**Path Parameters**

- **sessionId** (string, required): The session\'s ID. If the ID begins with a **/** character or contains **//**
  characters, it must be double-encoded before making an API request.

  - Examples: **KkMHZ4y8QhSUWAHi5sWvfg==**

**Query-String Parameters**

- **include_fields** (string, optional): Get the **download_access_token** field for downloading session recordings.

  - Examples: **download_access_token**

- **ttl** (integer, optional, min: 0, max: 604800): Time to live (TTL) of the **download_access_token**. This is only
  valid if the **include_fields** query parameter contains **download_access_token**. The range is between 0-604800.

**Request Body**

No request body required.

**Response Details**

The response includes the following fields:

- **session_id** (string): Unique Session Identifier. Each instance of the session will have its own session_id.

- **session_name** (string): Session name.

- **start_time** (date-time): The time at which the session started.

- **duration** (integer): Session duration.

- **total_size** (integer): The total file size of the recording. This includes the recording_files and
  participant_audio_files files.

- **recording_count** (integer): Number of recording files returned in the response of this API call. This includes
  the recording_files and participant_audio_files files.

  - **recording_files** (array of objects): List of recording files.

    - **id** (string): The recording file ID.

    - **recording_start** (string): The recording start time.

    - **recording_end** (string): The recording end time.

    - **file_type** (string): The recording file type. Allowed values: **MP4**, **M4A**, **TIMELINE**,
      **TRANSCRIPT**, **CHAT**, **CC**, **CSV**.

    - **file_size** (number): The recording file size.

    - **download_url** (string): The URL to download the recording.

    - **status** (enum): The recording status. Allowed values: **completed**.

    - **deleted_time** (string): The time at which the recording was deleted. Returned in the response only for
      trash query.

    - **recording_type** (string): The recording type. Allowed values: **shared_screen_with_speaker_view(CC)**,
      **shared_screen_with_speaker_view**, **shared_screen_with_gallery_view**, **speaker_view**,
      **gallery_view**, **shared_screen**, **audio_only**, **audio_transcript**, **chat_file**,
      **active_speaker**, **poll**, **timeline**, **closed_caption**, **local_transcript**,
      **original_transcript**.

  - **participant_video_files** (array of objects): List of recording files for each participant. The API only
    returns this response when the \"Record a separate audio file of each participant\" setting is enabled.

    - **id** (string): The recording file\'s unique ID.

    - **recording_start** (date-time): The recording file\'s start time.

    - **recording_end** (date-time): The recording file\'s end time.

    - **file_name** (string): The recording file\'s name.

    - **file_type** (string): The recording file\'s format. Allowed values: **MP4**, **M4A**, **TIMELINE**,
      **TRANSCRIPT**, **CHAT**, **CC**, **CSV**.

    - **file_extension** (string): The archived file\'s extension.

    - **file_size** (number): The recording file\'s size, in bytes.

    - **download_url** (string): The URL to download the recording.

    - **recording_type** (enum): The type of recording file. Allowed values: **individual_user**,
      **individual_shared_screen**.

    - **status** (enum): The recording file\'s status. Allowed values: **completed**.

    - **user_id** (string): The participant\'s session user ID.

    - **user_key** (string): The participant\'s SDK identifier. This value can be alphanumeric, up to a maximum
      length of 35 characters.

    - **download_access_token** (string): JWT for downloading the session recording. This is only returned if the
      **include_fields** query parameter contains **download_access_token**.

  - **participant_audio_files** (array of objects): List of recording files for each participant. The API only
    returns this response when the \"Record a separate audio file of each participant\" setting is enabled.

    - **id** (string): The recording file\'s unique ID.

    - **recording_start** (date-time): The recording file\'s start time.

    - **recording_end** (date-time): The recording file\'s end time.

    - **file_name** (string): The recording file\'s name.

    - **file_type** (string): The recording file\'s format. Allowed values: **MP4**, **M4A**, **TIMELINE**,
      **TRANSCRIPT**, **CHAT**, **CC**, **CSV**.

    - **file_extension** (string): The archived file\'s extension.

    - **file_size** (number): The recording file\'s size, in bytes.

    - **download_url** (string): The URL to download the recording.

    - **status** (enum): The recording file\'s status. Allowed values: **completed**.

    - **user_id** (string): The participant\'s session user ID.

    - **user_key** (string): The participant\'s SDK identifier. This value can be alphanumeric, up to a maximum
      length of 35 characters.

**Server Responses**

- **200 OK**: List of recording files returned.

- **403 Forbidden**: You do not have the right permissions.

**Example Request**

GET /videosdk/sessions/{sessionId}/recordings?include_fields=download_access_token&ttl=604800

**Example Response**

{

\"session_id\": \"KkMHZ4y8QhSUWAHi5sWvfg==\",

\"session_name\": \"Team Meeting\",

\"start_time\": \"2023-05-14T10:00:00Z\",

\"duration\": 120,

\"total_size\": 2048,

\"recording_count\": 2,

\"recording_files\": \[

{

\"id\": \"46cf7349-0b72-4ade-a8a2-a51dae38a69a\",

\"recording_start\": \"2023-05-14T10:00:00Z\",

\"recording_end\": \"2023-05-14T12:00:00Z\",

\"file_type\": \"MP4\",

\"file_size\": 1024,

\"download_url\": \"https://example.com/download/46cf7349-0b72-4ade-a8a2-a51dae38a69a\",

\"status\": \"completed\",

\"recording_type\": \"shared_screen_with_speaker_view\"

},

{

\"id\": \"67gh8491-2a32-4abc-b8b2-b51cde39a69b\",

\"recording_start\": \"2023-05-14T10:00:00Z\",

\"recording_end\": \"2023-05-14T12:00:00Z\",

\"file_type\": \"M4A\",

\"file_size\": 1024,

\"download_url\": \"https://example.com/download/67gh8491-2a32-4abc-b8b2-b51cde39a69b\",

\"status\": \"completed\",

\"recording_type\": \"audio_only\"

}

\],

\"participant_video_files\": \[

{

\"id\": \"89jk8512-3b43-5cde-d9c3-c62def40b70c\",

\"recording_start\": \"2023-05-14T10:00:00Z\",

\"recording_end\": \"2023-05-14T12:00:00Z\",

\"file_name\": \"Jane Doe\",

\"file_type\": \"MP4\",

\"file_extension\": \".mp4\",

\"file_size\": 512,

\"download_url\": \"https://example.com/download/89jk8512-3b43-5cde-d9c3-c62def40b70c\",

\"recording_type\": \"individual_user\",

\"status\": \"completed\",

\"user_id\": \"user123\",

\"user_key\": \"jdoe123\",

\"download_access_token\":
\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxMjM0NTY3ODkwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"

}

\]

}

</details>

#### Get session user QoS

This section describes the request related to retrieving the quality of service (QoS) for users from live or past
sessions. The data returned indicates the connection quality for sending and receiving video, audio, and shared content.
The API returns this data for either the API request or when the API request was last received. This API will not return
data if there is no data being sent or received at the time of request.

<details>
Our API is similar to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API
methods is available at: [Zoom API Documentation](https://developers.zoom.us/docs/api/). Additionally, it outlines how
we can leverage the Mind API in implementing these methods.

**Endpoint**

GET /videosdk/sessions/{sessionId}/users/{userId}/qos

**Permissions**

**Rate Limit Label:** Heavy

**Path Parameters**

- **sessionId** (string, required): The session\'s ID. If the ID begins with a / character or contains // characters,
  it must be double-encoded before making an API request.

  - Examples: KkMHZ4y8QhSUWAHi5sWvfg==

- **userId** (string, required): The user\'s ID.

  - Examples: DYHrdpjrS3uaOf7dPkkg8w

**Query-String Parameters**

- **type** (enum, optional, default: live): The session types. Allowed values: past, live

  - Examples: past

**Request Body**

No request body required.

**Response Details**

The response includes the following fields:

- **id** (string): The user\'s ID.

- **name** (string): The user\'s display name.

- **device** (enum): The type of device the user used to join the session. Allowed values: Phone, H.323/SIP, Windows,
  Mac, iOS, Android.

- **ip_address** (string): The user\'s IP address.

- **location** (string): The user\'s location.

- **network_type** (enum): The user\'s network type. Allowed values: Wired, Wifi, PPP, Cellular, Others.

- **microphone** (string): The type of microphone that the user used during the session.

- **speaker** (string): The type of speaker that the user used during the session.

- **camera** (string): The type of camera that the user used during the session.

- **data_center** (string): The data center where user\'s session data is stored.

- **connection_type** (string): The user\'s connection type.

- **join_time** (date-time): The time at which the user joined the session.

- **leave_time** (date-time): The time at which the user left the session.

  - **user_qos** (array of objects): The QoS (quality of service) provided to the user.

    - **date_time** (date-time): The QoS date.

    - **audio_input** (object): Information about the session\'s audio quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

    - **audio_output** (object): Information about the session\'s audio quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

    - **video_input** (object): Information about the session\'s video quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **video_output** (object): Information about the session\'s video quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **as_input** (object): Information about the session\'s share screen QoS (quality of service).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **as_output** (object): Information about the session\'s share screen QoS (quality of service).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **cpu_usage** (object): Information about CPU usage.

      - **zoom_min_cpu_usage** (string): Zoom\'s minimum CPU usage.

      - **zoom_avg_cpu_usage** (string): Zoom\'s average CPU usage.

      - **zoom_max_cpu_usage** (string): Zoom\'s maximum CPU usage.

      - **system_max_cpu_usage** (string): The system\'s maximum CPU usage.

**Server Responses**

- **200 OK**: Session user QoS returned.

**Example Request**

GET /videosdk/sessions/{sessionId}/users/{userId}/qos?type=past

**Example Response**

{

\"id\": \"DYHrdpjrS3uaOf7dPkkg8w\",

\"name\": \"John Doe\",

\"device\": \"Windows\",

\"ip_address\": \"192.168.1.1\",

\"location\": \"San Francisco, CA\",

\"network_type\": \"Wifi\",

\"microphone\": \"Logitech USB Microphone\",

\"speaker\": \"Logitech USB Speaker\",

\"camera\": \"Logitech HD Webcam\",

\"data_center\": \"US-WEST\",

\"connection_type\": \"UDP\",

\"join_time\": \"2023-05-14T10:00:00Z\",

\"leave_time\": \"2023-05-14T11:00:00Z\",

\"user_qos\": \[

{

\"date_time\": \"2023-05-14T10:30:00Z\",

\"audio_input\": {

\"bitrate\": \"50\",

\"latency\": \"20\",

\"jitter\": \"5\",

\"avg_loss\": \"0.1\",

\"max_loss\": \"0.2\"

},

\"audio_output\": {

\"bitrate\": \"55\",

\"latency\": \"25\",

\"jitter\": \"4\",

\"avg_loss\": \"0.1\",

\"max_loss\": \"0.2\"

},

\"video_input\": {

\"bit{

\"id\": \"DYHrdpjrS3uaOf7dPkkg8w\",

\"name\": \"John Doe\",

\"device\": \"Windows\",

\"ip_address\": \"192.168.1.1\",

\"location\": \"San Francisco, CA\",

\"network_type\": \"Wifi\",

\"microphone\": \"Logitech USB Microphone\",

\"speaker\": \"Logitech USB Speaker\",

\"camera\": \"Logitech HD Webcam\",

\"data_center\": \"US-WEST\",

\"connection_type\": \"UDP\",

\"join_time\": \"2023-05-14T10:00:00Z\",

\"leave_time\": \"2023-05-14T11:00:00Z\",

\"user_qos\": \[

{

\"date_time\": \"2023-05-14T10:30:00Z\",

\"audio_input\": {

\"bitrate\": \"50\",

\"latency\": \"20\",

\"jitter\": \"5\",

\"avg_loss\": \"0.1\",

\"max_loss\": \"0.2\"

},

\"audio_output\": {

\"bitrate\": \"55\",

\"latency\": \"25\",

\"jitter\": \"4\",

\"avg_loss\": \"0.1\",

\"max_loss\": \"0.2\"

},

\"video_input\": {

\"bitrate\": \"1200\",

\"latency\": \"30\",

\"jitter\": \"10\",

\"avg_loss\": \"0.5\",

\"max_loss\": \"1.0\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"30\"

},

\"video_output\": {

\"bitrate\": \"1150\",

\"latency\": \"28\",

\"jitter\": \"8\",

\"avg_loss\": \"0.4\",

\"max_loss\": \"0.9\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"30\"

},

\"as_input\": {

\"bitrate\": \"2000\",

\"latency\": \"35\",

\"jitter\": \"12\",

\"avg_loss\": \"0.3\",

\"max_loss\": \"0.7\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"25\"

},

\"as_output\": {

\"bitrate\": \"1900\",

\"latency\": \"33\",

\"jitter\": \"11\",

\"avg_loss\": \"0.2\",

\"max_loss\": \"0.6\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"25\"

},

\"cpu_usage\": {

\"zoom_min_cpu_usage\": \"5\",

\"zoom_avg_cpu_usage\": \"10\",

\"zoom_max_cpu_usage\": \"15\",

\"system_max_cpu_usage\": \"50\"

}

}

\]

}

**Mapping Zoom API Fields to Mind API**

Mind WebSDK methods will be used for filling the part of fields:

<https://gitlab.com/mindlabs/api/sdk/web/-/blob/5.10.0/reference/MediaStreamAudioStatistics.md>

<https://gitlab.com/mindlabs/api/sdk/web/-/blob/5.10.0/reference/MediaStreamVideoStatistics.md>

---

Zoom API Fields Mind API Fields Mind API Methods

---

**id** **Not applicable** **Not applicable**

**name** **Not applicable** **Not applicable**

**device** **Not applicable** **Not applicable**

**ip_address** **Not applicable** **Not applicable**

**location** **Not applicable** **Not applicable**

**network_type** **Not applicable** **Not applicable**

**microphone** **Not applicable** **Not applicable**

**speaker** **Not applicable** **Not applicable**

**camera** **Not applicable** **Not applicable**

**data_center** **Not applicable** **Not applicable**

**connection_type** **Not applicable** **Not applicable**

**join_time** **Not applicable** **Not applicable**

**leave_time** **Not applicable** **Not applicable**

**user_qos.date_time** **timestamp** **getTimestamp()**

**user_qos.audio_input.bitrate** **bitrate** **getBitrate()**

**user_qos.audio_input.latency** **rtt** **getRtt()**

**user_qos.audio_input.jitter** **delay** **getDelay()**

**user_qos.audio_input.avg_loss** **losses** **getLosses()**

**user_qos.audio_output.bitrate** **bitrate** **getBitrate()**

**user_qos.audio_output.latency** **rtt** **getRtt()**

**user_qos.audio_output.jitter** **delay** **getDelay()**

**user_qos.audio_output.avg_loss** **losses** **getLosses()**

**user_qos.video_input.bitrate** **bitrate** **getBitrate()**

**user_qos.video_input.latency** **rtt** **getRtt()**

**user_qos.video_input.jitter** **delay** **getDelay()**

**user_qos.video_input.avg_loss** **losses** **getLosses()**

**user_qos.video_input.resolution** **width, height** **getWidth(), getHeight()**

**user_qos.video_input.frame_rate** **rate** **getRate()**

**user_qos.video_output.bitrate** **bitrate** **getBitrate()**

**user_qos.video_output.latency** **rtt** **getRtt()**

**user_qos.video_output.jitter** **delay** **getDelay()**

**user_qos.video_output.avg_loss** **losses** **getLosses()**

**user_qos.video_output.resolution** **width, height** **getWidth(), getHeight()**

**user_qos.video_output.frame_rate** **rate** **getRate()**

---

</details>

#### List session users QoS

This section describes the request related to returning a list of session users from live or past sessions along with
the quality of service (QoS) they received during the session. The data returned indicates the connection quality for
sending and receiving video, audio, and shared content. You can specify a monthly date range for the dashboard data
using the from and to query parameters. The month should fall within the last six months. If you do not provide the type
query parameter, the API defaults to the live value and will only return metrics for users in a live session, if a
session is currently in progress. To view metrics on past session users, provide the past value for the type query
parameter.

<details>
Our API is similar to the Zoom API and uses similar methods and data models. Detailed information about the Zoom API
methods is available at: [Zoom API Documentation](https://developers.zoom.us/docs/api/). Additionally, it outlines how
we can leverage the Mind API in implementing these methods.

**Endpoint**

GET /videosdk/sessions/{sessionId}/users/qos

**Permissions**

**Rate Limit Label:** Heavy

**Path Parameters**

- **sessionId** (string, required): The session\'s ID. If the ID begins with a / character or contains // characters,
  it must be double-encoded before making an API request.

  - Examples: KkMHZ4y8QhSUWAHi5sWvfg==

**Query-String Parameters**

- **type** (enum, optional, default: live): The session types. Allowed values: past, live

  - Examples: past

- **page_size** (integer, optional, default: 1, max: 10): The number of items returned per page.

  - Examples: 10

- **next_page_token** (string, optional): The next page token is used to paginate through large result sets. A next
  page token will be returned whenever the set of available results exceeds the current page size. The expiration
  period for this token is 15 minutes.

  - Examples: Usse957pzxvmYwlmCZ50a6CNXFrhztxuj82

**Request Body**

No request body required.

**Response Details**

The response includes the following fields:

- **page_size** (integer): The number of items per page.

- **next_page_token** (string): The next page token is used to paginate through large result sets. A next page token
  will be returned whenever the set of available results exceeds the current page size.

- **users** (array of objects): Information about the session users.

  - **id** (string): The user\'s ID.

  - **name** (string): The user\'s display name.

  - **device** (enum): The type of device the user used to join the session. Allowed values: Phone, H.323/SIP,
    Windows, Mac, iOS, Android.

  - **ip_address** (string): The user\'s IP address.

  - **location** (string): The user\'s location.

  - **network_type** (enum): The user\'s network type. Allowed values: Wired, Wifi, PPP, Cellular, Others.

  - **microphone** (string): The type of microphone that the user used during the session.

  - **speaker** (string): The type of speaker that the user used during the session.

  - **camera** (string): The type of camera that the user used during the session.

  - **data_center** (string): The data center where user\'s session data is stored.

  - **connection_type** (string): The user\'s connection type.

  - **join_time** (date-time): The time at which the user joined the session.

  - **leave_time** (date-time): The time at which the user left the session.

  - **user_qos** (array of objects): The QoS (quality of service) provided to the user.

    - **date_time** (date-time): The QoS date.

    - **audio_input** (object): Information about the session\'s audio quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

    - **audio_output** (object): Information about the session\'s audio quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

    - **video_input** (object): Information about the session\'s video quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **video_output** (object): Information about the session\'s video quality of service (QoS).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **as_input** (object): Information about the session\'s share screen QoS (quality of service).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **as_output** (object): Information about the session\'s share screen QoS (quality of service).

      - **bitrate** (string): The number of bits per second that can be transmitted along a digital network, in
        Kbps.

      - **latency** (string): The time it takes for a packet to travel from point to point, in milliseconds.

      - **jitter** (string): The variation in the delay of received packets, in milliseconds.

      - **avg_loss** (string): The average amount of packet loss.

      - **max_loss** (string): The maximum amount of packet loss.

      - **resolution** (string): The number of pixels in each dimension that can be displayed by your video
        camera.

      - **frame_rate** (string): The frame rate at which your video camera can produce unique images.

    - **cpu_usage** (object): Information about CPU usage.

      - **zoom_min_cpu_usage** (string): Zoom\'s minimum CPU usage.

      - **zoom_avg_cpu_usage** (string): Zoom\'s average CPU usage.

      - **zoom_max_cpu_usage** (string): Zoom\'s maximum CPU usage.

      - **system_max_cpu_usage** (string): The system\'s maximum CPU usage.

**Server Responses**

- **200 OK**: Session users returned.

**Example Request**

GET /videosdk/sessions/{sessionId}/users/qos?type=past&page_size=10

**Example Response**

{

\"page_size\": 10,

\"next_page_token\": \"Usse957pzxvmYwlmCZ50a6CNXFrhztxuj82\",

\"users\": \[

{

\"id\": \"DYHrdpjrS3uaOf7dPkkg8w\",

\"name\": \"John Doe\",

\"device\": \"Windows\",

\"ip_address\": \"192.168.1.1\",

\"location\": \"San Francisco, CA\",

\"network_type\": \"Wifi\",

\"microphone\": \"Logitech USB Microphone\",

\"speaker\": \"Logitech USB Speaker\",

\"camera\": \"Logitech HD Webcam\",

\"data_center\": \"US-WEST\",

\"connection_type\": \"UDP\",

\"join_time\": \"2023-05-14T10:00:00Z\",

\"leave_time\": \"2023-05-14T11:00:00Z\",

\"user_qos\": \[

{

\"date_time\": \"2023-05-14T10:30:00Z\",

\"audio_input\": {

\"bitrate\": \"50\",

\"latency\": \"20\",

\"jitter\": \"5\",

\"avg_loss\": \"0.1\",

\"max_loss\": \"0.2\"

},

\"audio_output\": {

\"bitrate\": \"55\",

\"latency\": \"25\",

\"jitter\": \"4\",

\"avg_loss\": \"0.1\",

\"max_loss\": \"0.2\"

},

\"video_input\": {

\"bitrate\": \"1200\",

\"latency\": \"30\",

\"jitter\": \"10\",

\"avg_loss\": \"0.5\",

\"max_loss\": \"1.0\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"30\"

},

\"video_output\": {

\"bitrate\": \"1150\",

\"latency\": \"28\",

\"jitter\": \"8\",

\"avg_loss\": \"0.4\",

\"max_loss\": \"0.9\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"30\"

},

\"as_input\": {

\"bitrate\": \"2000\",

\"latency\": \"35\",

\"jitter\": \"12\",

\"avg_loss\": \"0.3\",

\"max_loss\": \"0.7\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"25\"

},

\"as_output\": {

\"bitrate\": \"1900\",

\"latency\": \"33\",

\"jitter\": \"11\",

\"avg_loss\": \"0.2\",

\"max_loss\": \"0.6\",

\"resolution\": \"1920x1080\",

\"frame_rate\": \"25\"

},

\"cpu_usage\": {

\"zoom_min_cpu_usage\": \"5\",

\"zoom_avg_cpu_usage\": \"10\",

\"zoom_max_cpu_usage\": \"15\",

\"system_max_cpu_usage\": \"50\"

}

}

\]

}

\]

}

**Mapping Zoom API Fields to Mind API**

Mind WebSDK methods will be used for filling the part of fields:

<https://gitlab.com/mindlabs/api/sdk/web/-/blob/5.10.0/reference/MediaStreamAudioStatistics.md>

<https://gitlab.com/mindlabs/api/sdk/web/-/blob/5.10.0/reference/MediaStreamVideoStatistics.md>

---

Zoom API Fields Mind API Fields Mind API Methods

---

id Not applicable Not applicable

name Not applicable Not applicable

device Not applicable Not applicable

ip_address Not applicable Not applicable

location Not applicable Not applicable

network_type Not applicable Not applicable

microphone Not applicable Not applicable

speaker Not applicable Not applicable

camera Not applicable Not applicable

data_center Not applicable Not applicable

connection_type Not applicable Not applicable

join_time Not applicable Not applicable

leave_time Not applicable Not applicable

user_qos.date_time timestamp getTimestamp()

user_qos.audio_input.bitrate bitrate getBitrate()

user_qos.audio_input.latency rtt getRtt()

user_qos.audio_input.jitter delay getDelay()

user_qos.audio_input.avg_loss losses getLosses()

user_qos.audio_output.bitrate bitrate getBitrate()

user_qos.audio_output.latency rtt getRtt()

user_qos.audio_output.jitter delay getDelay()

user_qos.audio_output.avg_loss losses getLosses()

user_qos.video_input.bitrate bitrate getBitrate()

user_qos.video_input.latency rtt getRtt()

user_qos.video_input.jitter delay getDelay()

user_qos.video_input.avg_loss losses getLosses()

user_qos.video_input.resolution width, height getWidth(), getHeight()

user_qos.video_input.frame_rate rate getRate()

user_qos.video_output.bitrate bitrate getBitrate()

user_qos.video_output.latency rtt getRtt()

user_qos.video_output.jitter delay getDelay()

user_qos.video_output.avg_loss losses getLosses()

user_qos.video_output.resolution width, height getWidth(), getHeight()

user_qos.video_output.frame_rate rate getRate()

---

</details>

### 4.2.8 Event API (In Progress)

This section describes the requests related to the event management API. This API provides methods for creating,
updating, and deleting events, as well as managing event participants and details. Our API is similar to the Zoom API
and uses similar methods and data models. Detailed information about the Zoom API methods is available at: [Zoom Event
API](https://developers.zoom.us/docs/api/rest/reference/event/methods/#overview). Additionally, it outlines how we can
leverage the Mind API in implementing these methods.

### 4.2.9 AI Summarizing and assistance API (In Progress)

his section describes the functionalities related to the AI Summarizing and Assistance API. This API is an extension of
the Zoom API designed to provide access to advanced AI features. It acts as a facade to AI Summarizing services,
offering access to key features including:

- **Aggregation of Meeting Series**: Allows for the collection and presentation of metadata essential for AI analysis.

- **Initiation of AI Summary Requests**: Enables users to initiate requests for AI-generated summaries and to access
  the resulting insights.

- **Management of AI Assistants:** Facilitates the creation and management of AI assistants that enhance meeting
  experiences through advanced computational capabilities.

This API leverages similar methods and data models as the Zoom API, ensuring a seamless integration for users familiar
with Zoom\'s interface.

## 4.3 Non-functional requirements (IN PROGRESS)

Non-functional requirements play a key role in ensuring the quality, performance, usability, and security of the
service.

- Integration support with other corporate systems via standard APIs.

### 4.3.1 Quality Attribute Non-Functional Requirements

### 4.3.2 Other Non-Functional Requirements

## 4.4 Constraints

In developing our service, an analog of the Zoom API, it is important to consider a number of constraints that may
affect architectural decisions and technology choices..

- Mind API Usage;

- Mind SDK Usage;

- Implementation of API similar to Zoom API;

This section describes the main constraints we face when developing our Zoom API-like service using the current Mind
API. These limitations are important to consider to ensure successful integration and operation of the system.

**Zoom API compatibility:**

- **Description:** Our service strives to match the Zoom API as closely as possible to simplify migration and
  integration for current Zoom users.

- **Limitations:** Full compliance may be limited due to differences in underlying technology and architecture between
  the Zoom and Mind APIs.

- **Solution:** Develop adapters and middleware layers that will translate Zoom API calls into Mind API calls and vice
  versa.

**Mind API Functional Limitations:**

- **Description:** The Mind API capabilities may not fully cover all the features available in the Zoom API,
  especially in terms of managing complex video conferencing scenarios.

- **Limitations:** Some specific Zoom features, such as breakout rooms management, may not be available in the Mind
  API.

- **Solution:** Development of additional modules and functions to extend the capabilities of Mind API, as well as
  active interaction with Mind developers to implement the necessary improvements.

## 4.5 Assumptions

This section lists all assumptions made by the architect during system design. These assumptions are important to fill
the gaps in the requirements and should be thoroughly checked with the project stakeholders.

**Assumption 1: Stability and Availability of the Mind API**

- **Description:** The Mind API is expected to be stably and continuously available for integration and use.

- **Explanation:** This assumption is important because the entire system depends on the API to provide the core
  functionality of the service.

- **Actions:** It is essential to regularly test the availability and performance of the Mind API and have an action
  plan in case it is unavailable.

**Assumption 2: Zoom and Mind API compatibility**

- **Description:** It is assumed that basic Zoom API functions can be implemented through existing Mind API functions
  with minimal customization.

- **Explanation:** This assumption is critical to ensure compatibility and reduce the development of custom solutions.

- **Actions:** A mapping session of Zoom functions to Mind functions is needed to validate this assumption
  and identify potential gaps.

# 5 Quality Attributes

## 5.1 Key Quality Attributes

+-------------------+--------------------------+-----------------------------------------------------------------------+
| Priority | Quality attribute | Measurable metric |
+===================+==========================+=======================================================================+
| | Availability | - Percentage of system availability, excluding planned downtime: |
| | | 99.9% |
| | | |
| | | - Scheduled downtime: no more than 120 minutes per month (as a |
| | | standard for such systems) |
| | | |
| | | - Time to update software/hardware: no more than 30 minutes (as a |
| | | standard for such systems) |
+-------------------+--------------------------+-----------------------------------------------------------------------+
| | Performance | - Estimated number of simultaneous users: up to 1000 (as a standard |
| | | for such systems) |
| | | |
| | | - Average response time to a web service request: less than 300 |
| | | ms\* |
+-------------------+--------------------------+-----------------------------------------------------------------------+
| | Reliability | - Failure rate: 0.1% or less per year |
| | | |
| | | - Mean Time to First Failure (MTTF): at least 5000 hours (as a |
| | | standard for such systems) |
| | | |
| | | - Mean Time to Repair (MTTR): 1 hour or less (as a standard for |
| | | such systems) |
| | | |
| | | - Time to switch to recovery system: at most 5 minutes (as a |
| | | standard for such systems) |
+-------------------+--------------------------+-----------------------------------------------------------------------+
| | Scailability | - System architecture allows horizontal scaling: yes |
| | | |
| | | - Time required to scale the system: no more than 10 minutes (as a |
| | | standard for such systems) |
| | | |
| | | - Scaling limits (number of servers, network bandwidth): meet |
| | | business requirements |
+-------------------+--------------------------+-----------------------------------------------------------------------+
| | Security | - Personal data security scenarios: enabled |
| | | |
| | | - Ability of the system to detect DDoS attacks: yes |
| | | |
| | | - System ability to respond to DDoS attacks: yes |
| | | |
| | | - User access restricted according to authentication/authorization: |
| | | yes |
| | | |
| | | - Secure connection: yes |
| | | |
| | | - Password encryption: yes |
| | | |
| | | - Ability to audit and log all critical user interactions: yes |
+-------------------+--------------------------+-----------------------------------------------------------------------+

\* depends on Mind API and AI providers

# 6 Baseline architecture (In PROGRESS)

\[**[Description:]{.underline}** This section describes baseline solution architecture, this is critical if target
architecture is designed in "brown field", i.e. there is legacy solution to be re-platformed.\]

## 6.1 Conceptual View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of general solution concept; this view is
single and simple picture for **[all]{.underline}** involved stakeholders. \]

## 6.2 Logical View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of solution structure. This is not 4+1
architectural view model view, though you can use 4+1 notation in this part if it fits for your purpose. \]

## 6.3 INTegration View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of aspects of solution integration with other
products/solutions/systems.\]

## 6.4 Data View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of aspects of solution data architecture.\]

## 6.5 INFRASTRUCTURE / deployment View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of solution deployment and infrastructure (for
all key environments, like development, staging, production, etc.). \]

# 7 Target Solution Architecture (IN PROGRESS)

This section delineates the target solution architecture in alignment with the established scope of architectural work.
It presents a detailed framework of the solution\'s architecture, showing how it will support the business\'s strategic
goals and integrate with existing and future technology landscapes.

## 7.1 Conceptual View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of general solution concept; this view is
single and simple picture for **[all]{.underline}** involved stakeholders. \]

## 7.2 Logical View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of solution structure. This is not 4+1
architectural view model view, though you can use 4+1 notation in this part if it fits for your purpose. \]

## 7.3 INTegration View (IN PROGRESS)

\[**[Description:]{.underline}** This section should contain description of aspects of solution integration with other
products/solutions/systems.\]

## 7.4 INFRASTRUCTURE View (DRAFT)

![Infrastructure view diagram](/infrastructure_view_diagram.png)

## 7.5 Addressing Key Quality Attributes (IN PROGRESS)

### 7.5.1 Availability

**Overview:** Availability is a critical quality attribute in solution architecture, particularly for systems that
require high reliability and continuous uptime. The following recommendations and best practices are designed to ensure
that the solution meets the desired availability metrics.

### 7.5.2 Interoperability

**Overview:** Interoperability in solution architecture ensures that different systems, applications, and services can
work together effectively, sharing data and functionalities without repeated reconfigurations. This section details the
best practices and recommendations to achieve high levels of interoperability in the target solution architecture.

### 7.5.3 Maintainability

**Overview:** Maintainability is a crucial quality attribute that focuses on the ease with which a software system can
be modified to correct faults, improve performance, or adapt to a changed environment. Below are the best practices and
recommendations to enhance the maintainability of the solution architecture.

### 7.5.4 Performance

**Overview:** Performance is an essential quality attribute in solution architecture, focusing on the system\'s
responsiveness, scalability, and efficiency. This section outlines the best practices and recommendations for ensuring
that the solution meets the desired performance metrics.

### 7.5.5 Scalability

**Overview:** Scalability is a fundamental quality attribute in solution architecture that addresses the system's
capability to handle growth---both in terms of user load and data volume---without compromising performance. This
section outlines the key practices and architectural strategies required to ensure the solution can scale effectively.

### 7.5.6 Security

**Overview:** Security is a critical quality attribute in any solution architecture, especially for systems handling
sensitive data or operating in regulated industries. This section details the best practices and recommendations for
ensuring robust security measures are incorporated throughout the solution\'s architecture.

### 7.5.7 Supportability

**Overview:** Supportability is an essential quality attribute in solution architecture, ensuring that the system is
designed not only for performance and functionality but also for ease of support and maintenance post-deployment. This
section outlines best practices and strategic approaches to enhance the supportability of the solution architecture.

### 7.5.8 Testability

**Overview:** Testability is a critical quality attribute in solution architecture that focuses on the ease with which a
system can be tested to validate its functionality, performance, and security. This section outlines the best practices
and strategies to enhance the testability of the system.

### 7.5.9 Usability

**Overview:** This subsection will articulate the importance of usability in system architecture, emphasizing the need
to create interfaces and workflows that are user-friendly, efficient, and accessible. Usability is a critical factor in
the overall user satisfaction and can significantly impact the adoption and success of the system.

## 7.6 Architecture Constraints and Limitations

The proposed solution architecture, while robust and scalable, inherently possesses certain constraints and limitations
that need to be clearly communicated to the Customer. Understanding these factors is vital for setting realistic
expectations and planning for future scalability and maintenance. Below are the key constraints and limitations
identified:

1.  **Cloud Dependency:** While cloud platforms enhance scalability and reliability, there is a potential risk of vendor
    lock-in. Although efforts such as containerization and orchestration are made to mitigate this, complete
    independence from cloud providers is not achievable without compromising some benefits such as managed services and
    automated scaling.

2.  **Performance Limitations:** The asynchronous nature of Node.js is highly efficient for I/O-bound tasks, but
    CPU-intensive operations may require additional optimization strategies or alternative technologies to maintain
    optimal performance.

3.  **Data Management Complexity:** Integrating MongoDB for unstructured data and PostgreSQL for structured data offers
    flexibility but also introduces complexity in maintaining data consistency and integrity across different database
    systems.

4.  **Security Challenges:** Continuous updates to security protocols and compliance with evolving standards are
    necessary to protect against threats. This ongoing requirement for security maintenance can be resource-intensive.

5.  **Third-Party Integration Rigidity:** Relying on third-party services like Google Calendar, Outlook, and TalkJS for
    critical functionalities introduces risks associated with their availability and the potential for API changes that
    could require rapid adaptation of our solution.

    - **Calendar Integration Challenges:** Synchronizing with external calendar services requires continuous
      compatibility with their API updates and handling the nuances of different calendar systems, which can
      complicate the maintenance and scalability of our scheduling features.

    - **Chat Functionality Constraints:** Utilizing TalkJS for chat functionality means our system\'s capabilities are
      tied to the performance and limitations of this external service. Any downtime or performance degradation on
      their end directly impacts our application\'s chat features.

6.  **Maintenance and Update Needs:** Regular updates are crucial for security and functionality, but they can introduce
    new bugs and require ongoing resources for testing and validation.

By acknowledging these constraints and limitations, the architecture can be designed with consideration for future
adaptations and enhancements, ensuring the system remains both effective and secure. These insights are vital for
setting the correct expectations with the Customer and planning effectively for future scalability and maintenance
challenges.

## 7.7 RISKS and mitigations

This section identifies potential risks associated with the target solution architecture and the migration process to
this new architecture. It also provides mitigation strategies for each identified risk. Effective communication of these
risks and their mitigations is essential to ensure that the customer is fully informed and prepared for possible
challenges.

-

# 8 RELEASE PLAN

## 8.1 Release PLAN

This section outlines the release plan for the functionality across three key phases: MVP, First Release, and Second
Release. Each phase corresponds to the integration level and dependencies on the Mind API, as well as additional
features available in Zoom\'s Pro plan that will be implemented with further modifications to the Mind API.

### 8.1.1 MVP

**Objective:** Launch the minimal viable product with core functionalities, including a web application with a UI similar
to Google Meet, utilizing the Mind SDK and a Zoom Meetings-like backend. This does not require changes to the Mind API.

- **Features:**

  - Development of a web application (Next.js (React.js) or Nuxt.js (Vue.js)) with a UI similar to Google Meet for
    joining meetings and displaying and managing live meeting items like input/output streams, local devices, etc.
  - Development of a Zoom Meetings-like backend implementing a subset of the Zoom Meeting API for managing meeting
    schedules, invitation links, etc.
  - Basic functionalities:
    - Create/Get/List/Update/Delete a meeting
    - Create Meeting's Invite Links
    - Join a meeting

This ensures that the MVP includes essential components for users to manage and participate in meetings efficiently.

### 8.1.2 First Release

**Objective:** Enhance functionalities by implementing features that require minor changes to the Mind API.

- **Features:**

  - User Authentication and user management
  - Enhanced implementation of Zoom Meeting API:
    - ~~Control and manage livestreaming~~
      > not relevant, maybe later
    - ~~SIP integration~~
      > not relevant
    - ~~List upcoming meetings~~
    - ~~List past meetings~~
      > This data is stored only in the linked calendar. not in this release
    - Get/List meetings summaries
      > not relevant for frontend
    - Update cloud recording settings, providing access to accomplished cloud recordings
      > not relevant for frontend
    - Control live-meeting parameters (start/stop recording, etc.)
      > not relevant for frontend
    - Basic functionality to Get/List meetings summaries (Zoom Meetings compatible API)
      > not relevant
  - Get QoS information
    > имеет смысл сразу пробрасывать QoS, например, в [GA4/BigQuary](https://www.ga4bigquery.com/introduction-to-google-analytics-4-ga4-export-data-in-bigquery/) или GTM
  - Enhanced functionality for AI summarizing and assistance
    > 👍
  - ~~Implementation of Zoom Video SDK API (**Subject to Removal**)~~

Each release phase is designed to progressively enhance the platform's capabilities while ensuring stability and
scalability through gradual integration and testing. This approach allows for feedback-driven development and minimizes
disruptions to existing users.

# 9 Architecture Decision Log

Since the spring of 2024, Sergei Fomin and Alexey Korolev have been discussing the basic requirements and approaches for
the implementation of the new Mind back-end service. As a result, the most important points are as follows:

- It has to be implemented based on Mind API/SDK (facading its API and types);

- It has to be AI Summarizer service facade;

- It has to be Zoom-like in terms of API, so that existing customers would be able to easily use our API instead of
  Zoom;

- It has to support FCM/APNS so that later our iOS application would be able to support PIP mode;

During the discussion Sergei and Alexey created a
[document](https://docs.google.com/document/d/1_xXEVklcXD8mxex1ybweNNEkTI7_0Ee-CNg79VBF2_I/edit?usp=sharing). It could
help to analyze architectural decisions taken in the first steps of service design.
