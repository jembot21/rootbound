"""Rasterize the game's recorded drawing commands. Not a Chrome capture."""
import json,re,math
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
S=2
fonts={}
def color(s,alpha=1):
 s=s.lstrip('#')
 if len(s)==3:s=''.join(c*2 for c in s)
 return tuple(int(s[i:i+2],16) for i in (0,2,4))+(int((int(s[6:8],16) if len(s)==8 else 255)*alpha),)
for n,scene in enumerate(['cover','title','boss','end','live']):
 im=Image.new('RGB',(1280*S,800*S),'#e9d9b6');d=ImageDraw.Draw(im,'RGBA')
 for op in json.loads(Path('tools/'+scene+'-commands.json').read_text()):
  st=op['s'];kind=op['kind'];alpha=st.get('globalAlpha',1)
  if kind=='text':
   size=int(re.search(r'(\d+)px',st['font'])[1])*S
   serif='Georgia' in st['font'];file='/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf' if serif else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
   key=(file,size)
   if key not in fonts:fonts[key]=ImageFont.truetype(file,size)
   font=fonts[key];x,y=[p*S for p in op['p']];w=d.textlength(op['text'],font=font)
   if st['textAlign']=='center':x-=w/2
   elif st['textAlign']=='right':x-=w
   d.text((x,y),op['text'],font=font,fill=color(st['fillStyle'],alpha),anchor='ls')
  else:
   for p in op['path']:
    points=[(x*S,y*S) for x,y in p]
    if len(points)<2:continue
    if kind=='fill':d.polygon(points,fill=color(st['fillStyle'],alpha))
    else:d.line(points,fill=color(st['strokeStyle'],alpha),width=max(1,round(st['lineWidth']*S*math.hypot(st['m'][0],st['m'][1]))),joint='curve')
 im=im.resize((1280,800),Image.Resampling.LANCZOS)
 dest=Path('screenshots')/f'{n+1}-{scene}.jpg' if scene!='live' else Path('tools/live-title.jpg')
 im.save(dest,quality=88)
 print(dest,dest.stat().st_size)
