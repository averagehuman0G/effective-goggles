from aiohttp import web
import socketio

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

async def index(req):
    return web.Response(text="YOu hAve Hit my S3rver", content_type='text/html')

@sio.on('message')
async def message(sid, data):
    await sio.emit("message", data, skip_sid=sid)

#@sio.on('enter room')
#def enter_room(sid, data):
#    sio.enter_room(sid, data['room']) 
#
#@sio.on('leave room')
#def leave_room(sid, data):
#    sio.leave_room(sid, data['room'])


app.router.add_get('/', index);

if __name__ == '__main__':
    web.run_app(app)        
