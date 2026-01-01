import fs from 'fs/promises';
import path from 'path';


// Modify the component to expect the correct type for params
export default async function WorkPage() {
    // Now we're awaiting params

    const imageDir = path.join(process.cwd(), 'public/images', 'Mobile');

    let imageFiles: string[] = [];
    try {
        imageFiles = await fs.readdir(imageDir); // Await the async function to read files
    } catch (error) {
        console.error('Error reading directory:', error);
    }

    return (
        <div className="min-h-screen p-8 pt-24">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
                Mobile Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {imageFiles.map((file, index) => (
                    <div key={index} className="glass-card p-3 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                        <div className="relative overflow-hidden rounded-xl shadow-sm">
                            <img
                                src={`/images/Mobile/${file}`}
                                alt={file}
                                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>
            
             <div className="mt-12 text-center">
                <a href="/" className="inline-block px-8 py-3 glass-btn rounded-full text-gray-800 font-semibold">
                    ← Back Home
                </a>
            </div>
        </div>
    );
}
