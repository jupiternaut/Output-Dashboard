import React, { useRef, useState } from 'react';
import { Upload, FileSpreadsheet, AlertCircle, Loader2 } from 'lucide-react';
import { parseCSVData, parseExcelData } from '../utils';
import { ConstructionData } from '../types';

interface FileUploaderProps {
  onDataLoaded: (data: ConstructionData[], fileName: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onDataLoaded }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    try {
      let parsedData: ConstructionData[] = [];
      
      if (file.name.endsWith('.csv')) {
        parsedData = await parseCSVData(file);
      } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        parsedData = await parseExcelData(file);
      } else {
        throw new Error("不支持的文件格式");
      }
      
      if (parsedData.length === 0) {
        throw new Error("文件中没有数据");
      }

      onDataLoaded(parsedData, file.name);
    } catch (error: any) {
      console.error("Failed to parse file:", error);
      alert(`导入失败: ${error.message || "请检查文件格式"}`);
    } finally {
      setIsLoading(false);
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".csv, .xlsx, .xls"
        className="hidden"
      />
      <button
        onClick={() => !isLoading && fileInputRef.current?.click()}
        disabled={isLoading}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm ${
            isLoading 
            ? 'bg-blue-400 cursor-wait text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
        <span>{isLoading ? '解析中...' : '导入数据 (CSV/Excel)'}</span>
      </button>
    </>
  );
};

export default FileUploader;