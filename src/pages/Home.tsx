import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpeningAnimation from "@/components/OpeningAnimation";
import Hero3D from "@/components/Hero3D";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SiInstagram, SiX, SiFacebook } from "react-icons/si";
import { Leaf, UploadCloud, ArrowRight, TreePine, MapPin, Mail, Phone, Linkedin } from "lucide-react";

import iitPeacockWalk from "@assets/WhatsApp_Image_2026-06-10_at_12.45.05_PM_(1)_1781075866713.jpeg";
import iitSign from "@assets/WhatsApp_Image_2026-06-10_at_12.45.05_PM_1781075866715.jpeg";
import iitBougainvillea from "@assets/WhatsApp_Image_2026-06-10_at_12.45.06_PM_1781075866716.jpeg";
import iitSunset from "@assets/WhatsApp_Image_2026-06-10_at_12.45.07_PM_(1)_1781075866717.jpeg";
import iitCycling from "@assets/WhatsApp_Image_2026-06-10_at_12.45.07_PM_(2)_1781075866717.jpeg";
import iitCorridor from "@assets/WhatsApp_Image_2026-06-10_at_12.45.07_PM_1781075866718.jpeg";
import iitPeacockFence from "@assets/WhatsApp_Image_2026-06-10_at_12.45.08_PM_(1)_1781075866719.jpeg";
import iitWaterTower from "@assets/WhatsApp_Image_2026-06-10_at_12.45.08_PM_1781075866719.jpeg";
import iitGlassTower from "@assets/WhatsApp_Image_2026-06-10_at_12.45.09_PM_1781075866720.jpeg";

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);
  
  // Wait to enable scroll until opening animation finishes
  useEffect(() => {
    if (showOpening) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showOpening]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <AnimatePresence>
        {showOpening && (
          <OpeningAnimation onComplete={() => setShowOpening(false)} />
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <PlantTreeSection />
        <GallerySection />
        <TestimonialsSection />
        <VolunteerSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
          <span className="font-serif font-bold text-xl tracking-wide text-foreground">Kanvana</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">Mission</a>
          <a href="#team" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">Team</a>
          <a href="#gallery" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">Gallery</a>
          <a href="#volunteer" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">Volunteer</a>
          <Button asChild variant="outline" className="border-accent/30 text-accent hover:bg-accent hover:text-background rounded-full transition-all">
            <a href="#plant">Plant a Tree</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <Hero3D />
      
      <div className="container relative z-10 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-foreground/80 mb-6">
            <TreePine className="w-4 h-4 text-accent" />
            <span>Rooted in IIT Kanpur. Growing for the world.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight text-white drop-shadow-lg">
            Breathe Life <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-foreground italic">Back to Earth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            Kanvana Foundation is an environmental movement dedicated to restoring our planet's green canopy. Join us in planting hope, one sapling at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto transition-transform hover:scale-105">
              <a href="#volunteer">Join the Movement</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base w-full sm:w-auto backdrop-blur-sm">
              <a href="#mission">Discover Our Mission</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Our Mission</h2>
            <div className="w-20 h-1 bg-accent" />
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              Founded in 2026 at Nankari, IIT Kanpur, we are a young and passionate community driven by a singular purpose: to restore the natural balance of our ecosystem.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              We believe that true sustainability requires action, not just words. Our approach is grassroots, engaging local communities to plant, nurture, and protect trees. We are building a legacy that will outlive us, ensuring future generations inherit a thriving, living world.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="border-l border-white/10 pl-6">
                <div className="text-3xl font-serif text-accent mb-2">Coming Soon</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest">Trees Planted</div>
              </div>
              <div className="border-l border-white/10 pl-6">
                <div className="text-3xl font-serif text-accent mb-2">Coming Soon</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest">Volunteers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img 
                src={iitCycling}
                alt="Forest canopy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 aspect-square w-48 rounded-2xl overflow-hidden border-4 border-background hidden md:block">
              <img 
                src={iitBougainvillea}
                alt="Sapling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    { name: "Prashant Yadav", role: "Founder & Chairperson" },
    { name: "Ashutosh Mishra", role: "Co-Founder & Vice Chairperson" },
    { name: "Ajay Singh / Rohit Dohre", role: "Chief Executive Officer (CEO)" },
    { name: "Rohit Dohre", role: "Director of Sustainability & Environmental Programs" }
  ];

  return (
    <section id="team" className="py-32 bg-[#0a110d]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            The Visionaries
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-20 h-1 bg-accent mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70"
          >
            Led by passionate environmentalists from IIT Kanpur, our leadership team is dedicated to creating lasting impact through strategic conservation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-accent flex items-center justify-center text-2xl font-serif mb-6 group-hover:bg-primary/40 transition-colors">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{member.name}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlantTreeSection() {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Invalid file", description: "Please upload an image file.", variant: "destructive" });
      return;
    }
    setUploading(true);
    try {
      const form = new FormData();
      form.append("photo", file);
      const res = await fetch("/api/gallery/upload", { method: "POST", body: form });
      if (!res.ok) throw new Error("Upload failed");
      setJustUploaded(true);
      window.dispatchEvent(new Event("kanvana_gallery_refresh"));
      toast({ title: "Photo uploaded!", description: "Your tree planting moment is now visible to everyone in our gallery." });
      setTimeout(() => setJustUploaded(false), 4000);
    } catch {
      toast({ title: "Upload failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="plant" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(138 45% 7%) 0%, hsl(140 50% 9%) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(52,183,90,0.07) 0%, transparent 70%)" }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(20,60,30,0.95) 0%, rgba(10,30,16,0.98) 100%)", border: "1px solid rgba(82,183,136,0.2)" }}
          >
            {/* top accent stripe */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg, transparent, #52b788, #95d5b2, #52b788, transparent)" }} />

            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6" style={{ background: "rgba(82,183,136,0.12)", color: "#95d5b2", border: "1px solid rgba(82,183,136,0.2)" }}>
                <Leaf className="w-3.5 h-3.5" />
                Share Your Green Moment
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Plant a Tree, Leave a Legacy</h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Upload your tree planting photo and it instantly appears in our shared gallery for everyone to see and celebrate.
              </p>
            </div>

            {justUploaded ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(82,183,136,0.15)", border: "2px solid rgba(82,183,136,0.4)" }}>
                  <TreePine className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">You've made your mark!</h3>
                <p className="text-foreground/60">Your photo is now live in the gallery below for all to see.</p>
              </motion.div>
            ) : (
              <div
                data-testid="upload-dropzone"
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${dragActive ? "border-accent/70 bg-accent/8" : "border-white/15 hover:border-accent/40 hover:bg-white/3"}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById("upload-input")?.click()}
              >
                <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: dragActive ? "rgba(82,183,136,0.15)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(82,183,136,0.2)" }}>
                  {uploading
                    ? <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    : <UploadCloud className={`w-9 h-9 ${dragActive ? "text-accent" : "text-white/50"}`} />}
                </div>
                <h3 className="text-xl text-white font-medium mb-2">{uploading ? "Uploading…" : "Drag & drop your photo here"}</h3>
                <p className="text-foreground/40 mb-8 text-sm">or click to browse — JPG, PNG, WEBP up to 10 MB</p>
                <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all" style={{ background: "linear-gradient(135deg, #2d9e5f, #52b788)", color: "#050f07" }}>
                  <UploadCloud className="w-4 h-4" />
                  {uploading ? "Please wait…" : "Choose Photo"}
                </div>
                <Input id="upload-input" type="file" accept="image/*" className="hidden" onChange={handleChange} disabled={uploading} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface GalleryImage { src: string; caption: string; isApi?: boolean; }

function GallerySection() {
  const staticImages: GalleryImage[] = [
    { src: iitCycling,       caption: "Green canopy of IIT Kanpur" },
    { src: iitBougainvillea, caption: "Bougainvillea blooms, IIT Kanpur" },
    { src: iitSunset,        caption: "Sunset over the campus" },
    { src: iitPeacockFence,  caption: "Wildlife at Nankari campus" },
    { src: iitWaterTower,    caption: "Water tower & Gulmohar" },
    { src: iitGlassTower,    caption: "Glass tower amidst red flowers" },
    { src: iitCorridor,      caption: "Green corridor, IIT Kanpur" },
    { src: iitPeacockWalk,   caption: "Peacock strolling through campus" },
    { src: iitSign,          caption: "IIT Kanpur — our founding ground" },
  ];

  const [apiImages, setApiImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      setApiImages((data.images || []).map((img: { url: string }) => ({
        src: img.url,
        caption: "Community planting",
        isApi: true,
      })));
    } catch { /* silent */ }
    finally { setLoading(false); }
  };

  useEffect(() => {
    fetchGallery();
    const interval = setInterval(fetchGallery, 8000);
    window.addEventListener("kanvana_gallery_refresh", fetchGallery);
    return () => {
      clearInterval(interval);
      window.removeEventListener("kanvana_gallery_refresh", fetchGallery);
    };
  }, []);

  const allImages: GalleryImage[] = [...apiImages, ...staticImages];

  return (
    <section id="gallery" className="py-32" style={{ background: "linear-gradient(180deg, hsl(140 50% 9%) 0%, hsl(138 48% 6%) 100%)" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent text-sm uppercase tracking-widest mb-4 font-medium">Living Gallery</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-serif text-white mb-4">
              Every Photo, <span className="text-gradient">A Green Story</span>
            </motion.h2>
            <div className="w-20 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #52b788, #95d5b2)" }} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-foreground/60 max-w-sm text-sm leading-relaxed">
              Real moments from our community and the beautiful campus of IIT Kanpur. Upload your photo above to appear here instantly.
            </p>
            {apiImages.length > 0 && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "#95d5b2" }}>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {apiImages.length} community photo{apiImages.length !== 1 ? "s" : ""} shared
              </span>
            )}
          </div>
        </div>

        {loading && allImages.length === 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[...Array(8)].map((_, i) => <div key={i} className="aspect-square rounded-xl animate-pulse" style={{ background: "rgba(82,183,136,0.07)" }} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {allImages.map((item, idx) => (
              <motion.div
                key={`${item.src}-${idx}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 9) * 0.06, duration: 0.5 }}
                className={`relative group rounded-2xl overflow-hidden ${idx === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}
                style={{ border: item.isApi ? "2px solid rgba(82,183,136,0.35)" : "1px solid rgba(255,255,255,0.06)" }}
              >
                <img src={item.src} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(5,20,10,0.85) 0%, transparent 60%)" }}>
                  {item.isApi && <span className="text-accent text-[10px] uppercase tracking-wider font-semibold mb-1">Community Upload</span>}
                  <p className="text-white text-xs font-medium leading-snug">{item.caption}</p>
                </div>
                {item.isApi && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(82,183,136,0.9)" }}>
                    <Leaf className="w-3 h-3 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: "Prem Sahu", location: "Nankari", text: "Kanvana has brought a new energy to our community. Seeing the saplings grow day by day gives me hope for our local environment." },
    { name: "Ajay Singh", location: "IIT Kanpur", text: "A truly inspiring initiative. The dedication of the team to actually get their hands dirty and plant trees is exactly what we need." },
    { name: "Sunny Mishra", location: "Nankari", text: "I participated in their first plantation drive. It was well-organized and felt like being part of a family that cares about the earth." },
    { name: "Vaibhav Yadav", location: "IIT Kanpur", text: "Environmental action that isn't just talk. The Kanvana Foundation's approach to sustainability is practical and impactful." },
    { name: "Kalpana Sharma", location: "Nankari", text: "Beautiful to see the youth taking such strong steps for nature. The trees planted here will be a blessing for our future generations." },
    { name: "Siddharth Thakur", location: "IIT Kanpur", text: "An excellent movement rooted right here on campus. Their commitment to making the surroundings greener is commendable." },
    { name: "Divyanshi Yadav", location: "Nankari", text: "Being involved with Kanvana made me realize how a small act like planting a sapling can connect you deeply with nature." },
    { name: "Krishnam Singh", location: "IIT Kanpur", text: "A fantastic initiative that brings students and locals together for a noble cause. Looking forward to more green drives." }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Voices of the Forest</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <p className="text-foreground/80 italic font-serif leading-relaxed mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-accent font-medium text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{review.name}</div>
                  <div className="text-foreground/50 text-xs">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerSection() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Welcome to Kanvana",
      description: "We'll be in touch soon about our next plantation drive.",
    });
  };

  return (
    <section id="volunteer" className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: `url(${iitCycling})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Become the Roots.</h2>
            <p className="text-xl text-white/80 font-light mb-12 max-w-lg leading-relaxed">
              We need hands in the soil. Join our community of volunteers and be part of the physical act of restoring our planet.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">Nankari, IIT Kanpur</div>
                  <div className="text-white/60 text-sm">Our founding grounds</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">Hands-on Action</div>
                  <div className="text-white/60 text-sm">Real planting, real impact</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                  <h3 className="text-2xl font-serif text-white mb-6">Join the Movement</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground/70">Full Name</Label>
                      <Input id="name" required className="bg-white/5 border-white/10 mt-1 focus-visible:ring-accent" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-foreground/70">Email</Label>
                        <Input id="email" type="email" required className="bg-white/5 border-white/10 mt-1 focus-visible:ring-accent" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground/70">Phone</Label>
                        <Input id="phone" type="tel" required className="bg-white/5 border-white/10 mt-1 focus-visible:ring-accent" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-foreground/70">City/Location</Label>
                      <Input id="city" required className="bg-white/5 border-white/10 mt-1 focus-visible:ring-accent" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground/70">Why do you want to join?</Label>
                      <Textarea id="message" className="bg-white/5 border-white/10 mt-1 min-h-[100px] focus-visible:ring-accent" />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-background font-semibold h-12 rounded-xl mt-4">
                      Submit Registration
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-background/95 backdrop-blur-xl border border-accent/30 rounded-3xl p-12 text-center shadow-2xl"
                >
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-4">Registration Received</h3>
                  <p className="text-foreground/70 mb-8">
                    Thank you for stepping up. We've saved your details and will contact you regarding our next plantation drive.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="border-white/20 text-white rounded-full">
                    Register Another
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-32 bg-[#0a110d] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Get in Touch</h2>
            <p className="text-foreground/70 mb-12 text-lg">
              Whether you want to partner with us, donate, or simply learn more about our initiatives, we'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Headquarters</div>
                  <div className="text-foreground/60">Nankari, IIT Kanpur<br/>Uttar Pradesh 208016</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Phone</div>
                  <div className="text-foreground/60">8318288563</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <div className="text-foreground/60">kanvanafoundation@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-serif text-white mb-8">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.instagram.com/kanvanafoundation/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-white hover:text-accent group">
                <SiInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Instagram</span>
              </a>
              <a href="https://x.com/officialkanvana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-white hover:text-accent group">
                <SiX className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Twitter / X</span>
              </a>
              <a href="https://www.linkedin.com/in/kanvana-foundation-6b1567411/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-white hover:text-accent group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/share/18Ro4TpB38/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-white hover:text-accent group">
                <SiFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050806] py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-accent" />
          <span className="font-serif font-bold text-lg text-white">Kanvana Foundation</span>
        </div>
        <div className="text-foreground/50 text-sm">
          &copy; {new Date().getFullYear()} Kanvana Foundation. Founded at IIT Kanpur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
