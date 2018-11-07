from aiohttp import web
import socketio

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

async def index(req):
    return web.Response(text="YOu hAve Hit my S3rver", content_type='text/html')

@sio.on('message')
async def message(sid, data):
    print("message ", data)

app.router.add_get('/', index);

if __name__ == '__main__':
    web.run_app(app)        
