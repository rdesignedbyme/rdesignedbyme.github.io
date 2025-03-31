import fs from 'fs/promises'; // Use async version
import path from 'path';

type WorkPageProps = {
    params: {
        workId: string;
    };
};

export default async function WorkPage({ params }: WorkPageProps) {
    const { workId } = params;
    const imageDir = path.join(process.cwd(), 'public/images', workId);

    let imageFiles: string[] = [];
    try {
        imageFiles = await fs.readdir(imageDir); // Await the async function
    } catch (error) {
        console.error('Error reading directory:', error);
    }

    return (
        // <div>
        //     <h2>Gallery for {workId}</h2>
        //     <div className="grid grid-cols-3 gap-4">
        //         {imageFiles.map((file, index) => (
        //             <img key={index} src={`/images/${workId}/${file}`} alt={file} className="w-full h-auto" />
        //         ))}
        //     </div>
        // </div>

        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {imageFiles.map((file, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src={`/images/${workId}/${file}`}
                            alt={file}
                            className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>


    );
}

