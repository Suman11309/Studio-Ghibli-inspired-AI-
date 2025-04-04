import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaDownload, FaShare } from 'react-icons/fa';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Here we would integrate with an AI image generation API
    // For now, we'll simulate the process
    setTimeout(() => {
      setGeneratedImage('https://source.unsplash.com/random/800x600?ghibli');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="app">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header>
          <h1>Ghibli AI Art Generator</h1>
          <p>Create magical Ghibli-inspired artwork with AI</p>
        </header>

        <div className="generator-section">
          <div className="input-group">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your Ghibli-inspired scene..."
              className="prompt-input"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="generate-btn"
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
            >
              <FaMagic className="icon" />
              {isGenerating ? 'Creating Magic...' : 'Generate Art'}
            </motion.button>
          </div>

          {generatedImage && (
            <motion.div
              className="result-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={generatedImage} alt="Generated Ghibli art" className="generated-image" />
              <div className="action-buttons">
                <button className="action-btn">
                  <FaDownload className="icon" />
                  Download
                </button>
                <button className="action-btn">
                  <FaShare className="icon" />
                  Share
                </button>
              </div>
            </motion.div>
          )}
        </div>

        <footer>
          <p>Made with ❤️ for Ghibli fans everywhere</p>
        </footer>
      </motion.div>
    </div>
  );
}

export default App; 