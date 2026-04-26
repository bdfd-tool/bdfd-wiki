# Timestamp Converter

<style>
.editPage {
	visibility: hidden;
}
.converter-section {
    background: var(--card-bg);
	border-radius: var(--border-radius);
	border: 1px solid rgba(255, 255, 255, 0.05);
	margin-top: 1.5rem;
	padding-bottom: 0rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.converter-section h2 {
    margin-top: -.5rem;
    padding-top: 1.5rem;
}
.converter-section p {
    margin-top: -1.5rem;
}
.converter-section label {
	display: block;
	margin-bottom: .5rem !important;
	color: var(--error);
}
.converter-section input {
    color: #fff;
    padding: 2.25rem;
    width: 100%;
	max-width: 100%;
	box-sizing: border-box;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: var(--border-radius);
    border-width: 0;
    font-family: monospace;
    font-size: 14px;
    height: 3rem;
    margin-bottom: 1rem;
    outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
}
#datetimepicker {
    margin-bottom: 1rem !important;
}
.result {
    margin-top: 1rem;
	margin-bottom: 1.5rem;
    padding: 1rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: var(--border-radius);
    font-weight: bold;
    word-break: break-all;
    display: flex;
    height: 3.5rem !important;
    align-items: center;
    position: relative;
}
.result p {
	margin-top: 1.5rem !important;
	padding: .5rem;
	border-radius: var(--border-radius);
	word-break: break-all;
	display: flex;
	height: 3.5rem !important;
	align-items: center;
	user-select: none;
	-webkit-user-select: none;
}
.timestamp {
    color: #7f8c8d;
}
.time-buttons {
    user-select: none;
	-webkit-user-select: none;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
    margin-bottom: 2rem;
    margin-top: -1rem;
}
.converter-section button {
	outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 4rem;
	border: none;
	border-radius: var(--border-radius);
	cursor: pointer;
	margin-top: 1rem !important;
    margin-right: 1rem !important;
	font-size: 1.5rem;
	margin: 0.25%;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.current-time {
    text-align: center;
    padding: 1.5rem;
    background-color: var(--card-bg);
    border-radius: var(--border-radius);
    margin-top: 3rem;
    position: relative;
}
#current-time span {
	color: #a5a5a5;
}
.timezone-error, #date-info {
    color: var(--error) !important;
    font-size: 1rem;
    min-height: 1rem;
	margin-top: -0.75rem;
	margin-bottom: -0.75rem !important;
}
.copy-success {
	color: #4CAF50;
	font-size: 0.9rem;
	opacity: 0;
	transition: opacity 0.3s;
	position: absolute;
	bottom: 0.3rem;
	right: 0.75rem;
}
.copy-success.show {
	opacity: 1;
}
.clickable-timestamp {
	cursor: pointer;
}
#date-info {
	margin-top: -2rem !important;
	margin-left: -1rem;
	padding: 1rem;
}
</style>

Here you can manage UnixTime for your commands.

```admonish note
Unix time is a system for tracking time by counting the number of seconds that have passed since January 1st, 1970. This value is stored as a simple integer, which computers can easily process and calculate with. For example, the function [`$getTimestamp`](https://wiki.botdesignerdiscord.com/nightl/bdscript/getTimestamp.md) can be used to get the current Unix timestamp or perform time-based operations for your bot.
```

```admonish info
The timezone selected on your device is used as default.
```

<div class="converter-section">
    <h2>Time zone</h2>
    <p>Select timezone for time calculations</p>
    <input type="timestamp" id="timezone" placeholder="e.g., Europe/London" oninput="updateTimezone()" onkeypress="if(event.key === 'Enter') updateTimezone()">
    <label class="timezone-error"></label>
</div>

<div class="converter-section">
    <h2>Date to Unix Timestamp</h2>
    <p>Select a date and time:</p>
    <input type="datetime-local" id="datetimepicker" oninput="updateUnixTime()">
    <div class="result">
		<p>Unix timestamp:</p>
        <span id="unixtime-display" class="clickable-timestamp" onclick="copyTimestamp('unixtime-display', 'unixCopySuccess')">0</span>
        <div class="timestamp" id="timestamp-info"></div>
        <span class="copy-success" id="unixCopySuccess">Copied!</span>
    </div>
</div>

<div class="converter-section">
    <h2>Unix Timestamp to Date</h2>
    <p>Enter Unix timestamp:</p>
    <input type="number" id="unix-input" placeholder="e.g., 1704067200" oninput="updateDateFromUnix()" onkeypress="if(event.key === 'Enter') updateDateFromUnix()" min="0">
    <div class="result">
		<p>Date and time:</p>
        <span id="date-display" class="clickable-timestamp" onclick="copyTimestamp('date-display', 'dateCopySuccess')">Not set</span>
        <span class="copy-success" id="dateCopySuccess">Copied!</span>
    </div>
	<div class="timestamp" id="date-info"></div>
</div>

<div class="converter-section">
    <h2>Time Remaining</h2>
    <p>Time until selected Unix timestamp:</p>
    <div class="result">
        <span id="timer-display">Loading...</span>
    </div>
</div>

<div class="current-time">
    <span id="current-time"></span>
</div>

## Functions

Here are all the functions related to unix timestamp.

**GET**:

- [`$getEmbedData[]`](https://wiki.botdesignerdiscord.com/nightl/bdscript/getEmbedData.md)
- [`$getTimestamp`](https://wiki.botdesignerdiscord.com/nightl/bdscript/getTimestamp.md)
- [`$getTimestamp[]`](https://wiki.botdesignerdiscord.com/nightl/bdscript/getTimestampComplex.md)
- [`$hostingExpireTime`](https://wiki.botdesignerdiscord.com/nightl/bdscript/hostingExpireTime.md)
- [`$hostingExpireTime[]`](https://wiki.botdesignerdiscord.com/nightl/bdscript/hostingExpireTimeComplex.md)
- [`$lastPinTimestamp`](https://wiki.botdesignerdiscord.com/nightl/bdscript/lastPinTimestamp.md)
- [`$messageEditedTimestamp[]`](https://wiki.botdesignerdiscord.com/nightl/bdscript/messageEditedTimestamp.md)
- [`$premiumExpireTime`](https://wiki.botdesignerdiscord.com/nightl/bdscript/premiumExpireTime.md)

## Example

```
$nomention
Unix date: <t:1917043200:D>
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Unix date: <div class="discord-time-mark">January 10, 2030</div>
```

```admonish example
You can use [Discord timestamp highlighting](https://wiki.botdesignerdiscord.com/nightl/resources/discordTimestamps.md) to make your code look nicer!
```
