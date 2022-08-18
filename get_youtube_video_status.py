from apiclient.discovery import build

# API情報
API_KEY = 'AIzaSyCZREmirgUusa7ypUzmtmnawSlq1AFb-jw'
YOUTUBE_API_SERVICE_NAME = 'youtube'
YOUTUBE_API_VERSION = 'v3'

youtube = build(
  YOUTUBE_API_SERVICE_NAME, 
  YOUTUBE_API_VERSION,
  developerKey=API_KEY
)

search_response = youtube.videos().list(
  id='W-4xgCV83e4',
  part='snippet,contentDetails,status',
).execute()

print(search_response)
# live（ライブ配信中）upcoming（ライブ配信予約）none（ライブ配信終了）
print(search_response["items"][0]["snippet"]["liveBroadcastContent"])
